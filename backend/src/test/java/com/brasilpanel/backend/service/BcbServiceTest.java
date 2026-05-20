package com.brasilpanel.backend.service;

import com.brasilpanel.backend.dto.api.bcb.CdiDataDTO;
import com.brasilpanel.backend.dto.api.bcb.DollarPtaxDTO;
import com.brasilpanel.backend.service.api.bcb.BcbService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class BcbServiceTest {

    @Mock
    private RestClient restClient;

    @Mock
    private RestClient.RequestHeadersUriSpec requestHeadersUriSpec;

    @Mock
    private RestClient.ResponseSpec responseSpec;

    @InjectMocks
    private BcbService bcbService;

    @Test
    void returDollarPtax() {
        List<Map<String, String>> apiResponse = List.of(
                Map.of("data", "19/05/2026", "valor", "5.87")
        );

        when(restClient.get()).thenReturn(requestHeadersUriSpec);
        when(requestHeadersUriSpec.uri(anyString())).thenReturn(requestHeadersUriSpec);
        when(requestHeadersUriSpec.retrieve()).thenReturn(responseSpec);
        when(responseSpec.body(List.class)).thenReturn(apiResponse);

        DollarPtaxDTO result = bcbService.getDollarPtax();

        assertEquals("19/05/2026", result.date());
        assertEquals(5.87, result.value());
    }

    @Test
    void returnCdiRate(){
        List<Map<String, String>> apiResponse = List.of(
                Map.of("data", "19/05/2026", "valor", "0.87")
        );
        when(restClient.get()).thenReturn(requestHeadersUriSpec);
        when(requestHeadersUriSpec.uri(anyString())).thenReturn(requestHeadersUriSpec);
        when(requestHeadersUriSpec.retrieve()).thenReturn(responseSpec);
        when(responseSpec.body(List.class)).thenReturn(apiResponse);

        CdiDataDTO result = bcbService.getCdiRate();

        assertEquals("19/05/2026", result.data());
        assertEquals(0.87, result.valor());

    }
}
