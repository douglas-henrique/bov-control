import { useQuery } from '@tanstack/react-query';
import { getListData } from '@/services/listService';

export const useListData = () => {
  const query = useQuery({
    queryFn: getListData,
    queryKey: ['list-data']
  })

  return {...query, data: query.data?.data}
}