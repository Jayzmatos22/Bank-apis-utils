package com.brasilpanel.backend.config.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;



@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {

        // 1. Pega o header Authorization
        final String authHeader = request.getHeader("Authorization");

        // 2. Se não tem token, passa pra frente
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        // 3. Extrai o token (remove "Bearer ")
        final String token = authHeader.substring(7);

        // 4. Extrai o email do token
        final String email = jwtService.extractEmail(token);

        // 5. Se tem email e ainda não está autenticado
        if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            // 6. Carrega o usuário do banco
            UserDetails userDetails = userDetailsService.loadUserByUsername(email);

            // 7. Valida o token
            if (jwtService.isTokenValid(token, userDetails)) {

                // 8. Cria autenticação e seta no contexto
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(
                                userDetails,
                                null,
                                userDetails.getAuthorities()
                        );

                authToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );

                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        // 9. Continua o fluxo
        filterChain.doFilter(request, response);
    }
}