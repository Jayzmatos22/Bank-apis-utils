package com.brasilpanel.backend.dto.api.alphaVantage;

import com.fasterxml.jackson.annotation.JsonAlias;

public record StockQuoteDTO(
        @JsonAlias("01. symbol") String symbol,
        @JsonAlias("02. open") Double open,
        @JsonAlias("03. high") Double high,
        @JsonAlias("04. low") Double low,
        @JsonAlias("05. price") Double price,
        @JsonAlias("06. volume") Long volume,
        @JsonAlias("07. latest trading day") String latestTradingDay,
        @JsonAlias("08. previous close") Double previousClose,
        @JsonAlias("09. change") Double change,
        @JsonAlias("10. change percent") String changePercent
) {}
