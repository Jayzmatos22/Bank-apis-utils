package com.brasilpanel.backend.dto.api.coinGecko;

import com.fasterxml.jackson.annotation.JsonAlias;

public record CryptoCoinGeckoMarketDTO(
        // 100 objetos na requisição
        String id,
        String symbol,
        String name,
        @JsonAlias("current_price") Double currentPrice,
        @JsonAlias("market_cap") Long marketCap,
        @JsonAlias("price_change_percentage_24h") Double priceChange24h,
        @JsonAlias("image") String imageUrl
) {}
