package com.brasilpanel.backend.service.api.bcb;

import com.brasilpanel.backend.dto.api.bcb.SelicDataDTO;
import org.springframework.cache.annotation.Cacheable;

public class BcbService {


    @Cacheable("selic")
    public SelicDataDTO getSelic() {
        return null;
    }
}
