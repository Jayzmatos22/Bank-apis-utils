package com.brasilpanel.backend.dto.api.bcb;

public record SelicDataDTO(
        double currentRate,
        double accumulatedMonth,
        double accumulatedYear,
        double last12MonthsCompound
) {}
