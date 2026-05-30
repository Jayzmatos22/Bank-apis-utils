package com.brasilpanel.backend.dto.api.alphaVantage;

import com.fasterxml.jackson.annotation.JsonAlias;

// Map entregue pelo AlphaVantage
public record GlobalQuoteWrapper(
        @JsonAlias("Global Quote") StockQuoteDTO globalQuote
) {}
