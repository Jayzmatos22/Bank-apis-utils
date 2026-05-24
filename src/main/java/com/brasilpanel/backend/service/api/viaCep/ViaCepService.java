package com.brasilpanel.backend.service.api.viaCep;

import com.brasilpanel.backend.dto.api.viaCep.ViaCepResponseDTO;
import com.brasilpanel.backend.exception.customized.ViaCepException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
@RequiredArgsConstructor
public class ViaCepService {

    private final RestClient restClient;

    public ViaCepResponseDTO getAdressByCep(String cep) {
        String cleanCep = cep.replaceAll("\\D", "");

        if (cleanCep.length() != 8) {
            throw new ViaCepException("CEP deve ter 8 dígitos numéricos");
        }

        try {
            return restClient.get()
                    .uri("https://viacep.com.br/ws/{cep}/json/", cleanCep)
                    .retrieve()
                    .body(ViaCepResponseDTO.class);
        } catch (Exception e) {
            throw new ViaCepException("Erro ao buscar CEP: " + e.getMessage());
        }
    }
}
