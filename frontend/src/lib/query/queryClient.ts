import { QueryClient } from '@tanstack/react-query';
import { MARKET } from '../../constants/queryTimes';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:            MARKET.staleTime,
      gcTime:               MARKET.gcTime,
      retry:                MARKET.retry,
      refetchOnWindowFocus: false,
    },
  },
});
