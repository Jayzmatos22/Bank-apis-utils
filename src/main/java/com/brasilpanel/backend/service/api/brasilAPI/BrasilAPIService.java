package com.brasilpanel.backend.service.api.brasilAPI;

import com.brasilpanel.backend.dto.api.brasilAPI.BankDTO;
import com.brasilpanel.backend.exception.customized.BrasilApiException;
import com.brasilpanel.backend.exception.customized.BrasilApiNotFoundException;
import org.springframework.cache.annotation.Cacheable;
import lombok.RequiredArgsConstructor;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BrasilAPIService {
    private final RestClient restClient;


    @Cacheable("banks")
    public List<BankDTO> returnAllBanks() {
        try {
            List<BankDTO> data = restClient.get()
                    .uri("https://brasilapi.com.br/api/banks/v1")
                    .retrieve()
                    .body(new ParameterizedTypeReference<List<BankDTO>>() {
                    });
            if (data == null || data.isEmpty()){
                throw new BrasilApiException("Nenhum banco encontrado");
            }
            return data.stream()
                    .filter(b -> b.code() != null && b.code() > 0)
                    .filter(b -> !b.name().isBlank() && b.name() != null)
                    .sorted(Comparator.comparingInt(BankDTO::code))
                    .toList();

        } catch (BrasilApiException e){
            throw e;
        } catch (Exception e){
            throw new BrasilApiException("Erro ao buscar bancos na API: "+ e.getMessage());
        }
    }


    public BankDTO getBankByCode(int code) {
        try {
            BankDTO data = restClient.get()
                    .uri("https://brasilapi.com.br/api/banks/v1/{code}", code)
                    .retrieve()
                    .onStatus(status -> status.value() == 404,
                            (request, response) -> {
                                throw new BrasilApiNotFoundException("Banco com código " + code + " não encontrado");
                            })
                    .body(BankDTO.class);

            if (data == null) {
                throw new BrasilApiNotFoundException("Banco com código " + code + " não encontrado");
            }
            return data;

        } catch (BrasilApiNotFoundException e) {
            throw e;
        } catch (BrasilApiException e) {
            throw e;
        } catch (Exception e) {
            throw new BrasilApiException("Erro ao buscar banco código " + code + ": " + e.getMessage());
        }
    }


}
