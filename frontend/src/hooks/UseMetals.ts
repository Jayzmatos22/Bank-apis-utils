import { useQuery } from '@tanstack/react-query';
import { metalsDevService } from '../api/services/MetalsDev';
import { FINANCIAL } from '../constants/queryTimes';

export function useMetals() {
  return useQuery({
    queryKey: ['metals'],
    queryFn: metalsDevService.getMetals,
    ...FINANCIAL,
  });
}