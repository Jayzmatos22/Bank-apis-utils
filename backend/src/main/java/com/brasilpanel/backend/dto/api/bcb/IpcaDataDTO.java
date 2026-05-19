package com.brasilpanel.backend.dto.api.bcb;

public record IpcaDataDTO(
        double currentMonth,
        double accumulatedYear,
        double last12MonthsSum,
        double last12MonthsCompound
) {}
