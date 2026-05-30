package com.brasilpanel.backend.dto.api.bcb;

import com.fasterxml.jackson.annotation.JsonAlias;

public record DollarPtaxDTO(
        @JsonAlias("data") String date,
        @JsonAlias("valor") Double value
) {}
