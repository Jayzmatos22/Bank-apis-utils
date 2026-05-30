const s = 1000;
const min = s * 60;
const h = min * 60;

// ─────────────────────────────────────────────────────────────────────────────
// ESTÁTICO — dados geográficos e cadastrais (nunca ou raramente mudam)
//   ViaCep    → endereço por CEP
//   IBGE      → estados e municípios
//   BrasilAPI → lista de bancos
// ─────────────────────────────────────────────────────────────────────────────
export const STATIC = {
  staleTime:       h * 24,
  gcTime:          h * 24,
  refetchInterval: false,
  retry:           1,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// SÉRIE HISTÓRICA — publicações mensais/anuais (atualizam 1x por mês ou ano)
//   IPEA      → macro, emprego, renda, desigualdade, preços, população
//   WorldBank → PIB do Brasil
// ─────────────────────────────────────────────────────────────────────────────
export const HISTORICAL = {
  staleTime:       h * 24,
  gcTime:          h * 24,
  refetchInterval: false,
  retry:           1,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// DIÁRIO — indicadores publicados pelo Banco Central (atualizam 1x por dia)
//   BCB → SELIC, IPCA, CDI, PTAX, salário mínimo, histórico SELIC
// ─────────────────────────────────────────────────────────────────────────────
export const DAILY = {
  staleTime:       h,
  gcTime:          h * 2,
  refetchInterval: false,
  retry:           2,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// FINANCEIRO — preços de ativos com liquidez moderada (bolsa, metais)
//   AlphaVantage → cotação de ações (PETR4, VALE3, etc.)
//   MetalsDev    → ouro, prata, platina, paládio, cobre, alumínio
// ─────────────────────────────────────────────────────────────────────────────
export const FINANCIAL = {
  staleTime:       min * 15,
  gcTime:          min * 30,
  refetchInterval: min * 15,
  retry:           2,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// MERCADO — câmbio entre moedas (oscila durante o dia inteiro)
//   Frankfurter → taxa entre moedas, histórico 30 dias
// ─────────────────────────────────────────────────────────────────────────────
export const MARKET = {
  staleTime:       min * 5,
  gcTime:          min * 15,
  refetchInterval: min * 5,
  retry:           2,
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// TEMPO REAL — ativos altamente voláteis
//   CoinGecko → top 100 criptos, cotação por nome
// ─────────────────────────────────────────────────────────────────────────────
export const REALTIME = {
  staleTime:       min * 2,
  gcTime:          min * 5,
  refetchInterval: min * 2,
  retry:           1,
} as const;
