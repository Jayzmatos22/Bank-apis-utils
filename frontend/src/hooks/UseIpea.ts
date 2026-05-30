import { useQuery } from '@tanstack/react-query';
import { ipeaService } from '../api/services/Ipea';
import { HISTORICAL } from '../constants/queryTimes';

export function useMacro() {
  return useQuery({
    queryKey: ['ipea', 'macro'],
    queryFn: ipeaService.getMacro,
    ...HISTORICAL,
  });
}

export function useEmprego() {
  return useQuery({
    queryKey: ['ipea', 'emprego'],
    queryFn: ipeaService.getEmprego,
    ...HISTORICAL,
  });
}

export function useRenda() {
  return useQuery({
    queryKey: ['ipea', 'renda'],
    queryFn: ipeaService.getRenda,
    ...HISTORICAL,
  });
}

export function useDesigualdade() {
  return useQuery({
    queryKey: ['ipea', 'desigualdade'],
    queryFn: ipeaService.getDesigualdadePobreza,
    ...HISTORICAL,
  });
}

export function usePrecos() {
  return useQuery({
    queryKey: ['ipea', 'precos'],
    queryFn: ipeaService.getPrecos,
    ...HISTORICAL,
  });
}

export function usePopulacao() {
  return useQuery({
    queryKey: ['ipea', 'populacao'],
    queryFn: ipeaService.getPopulacao,
    ...HISTORICAL,
  });
}
