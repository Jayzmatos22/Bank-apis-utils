import { useQuery } from '@tanstack/react-query';
import { viaCepService } from '../api/services/ViaCep';
import { STATIC } from '../constants/queryTimes';

export function useViaCep(cep: string) {
  const cleanCep = cep.replace(/\D/g, '');

  return useQuery({
    queryKey: ['viacep', cleanCep],
    queryFn: () => viaCepService.getAddressByCep(cleanCep),
    enabled: cleanCep.length === 8,
    ...STATIC,
  });
}
