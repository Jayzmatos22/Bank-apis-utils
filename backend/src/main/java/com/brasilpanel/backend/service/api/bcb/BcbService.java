package com.brasilpanel.backend.service.api.bcb;

import com.brasilpanel.backend.dto.api.bcb.*;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Map;


@RequiredArgsConstructor
@Service
public class BcbService implements BcbImplementations{
    private final RestClient restClient;



    @Cacheable("selic")
    public SelicDataDTO getSelic() {
        return null;
    }



    @Override
    public IpcaDataDTO getIpca() {
        return null;
    }


    // ptax
    @Override
    public DollarPtaxDTO getDollarPtax() {
        List<Map> data = restClient.get()
                .uri("https://api.bcb.gov.br/dados/serie/bcdata.sgs.1/dados/ultimos/1?formato=json")
                .retrieve()
                .body(List.class);

        Map entry = data.get(0);
        return new DollarPtaxDTO(
                (String) entry.get("data"),
                Double.parseDouble((String) entry.get("valor"))
        );
    }



    @Override
    public CdiDataDTO getCdiRate() {
        List<Map> data = restClient.get()
                .uri("https://api.bcb.gov.br/dados/serie/bcdata.sgs.12/dados/ultimos/1?formato=json")
                .retrieve()
                .body(List.class);
        Map entry = data.get(0);
        return  new CdiDataDTO(
                (String) entry.get("data"),
                Double.parseDouble((String)  entry.get("valor"))
        );

    }



    @Override
    public List<SelicHistoryDTO> getSelicHistory() {
        return List.of();
    }



    @Override
    public FinancialDataDTO getFinancialData() {
        return null;
    }
}
