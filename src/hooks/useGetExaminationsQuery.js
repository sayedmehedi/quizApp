import {apiClient} from '../lib/http';
import {useInfiniteQuery} from '@tanstack/react-query';

export default function useGetExaminationsQuery(params = {}) {
  return useInfiniteQuery({
    queryKey: ['examination', 'list'],
    queryFn: function ({pageParam}) {
      return apiClient.get('examinations', {
        params: pageParam,
      });
    },
    getNextPageParam: lastPage => {
      if (lastPage.data?.meta?.current_page < lastPage.data?.meta?.last_page) {
        return {
          page: lastPage.data.meta.current_page + 1,
        };
      }
    },
  });
}
