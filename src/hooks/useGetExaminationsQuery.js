import {apiClient} from '../lib/http';
import {useInfiniteQuery} from '@tanstack/react-query';

export default function useGetExaminationsQuery(params = {}) {
  return useInfiniteQuery({
    queryKey: ['examination', 'list'],
    queryFn: function ({pageParam}) {
      return apiClient
        .get('examinations', {
          params: pageParam,
        })
        .then(response => response.data);
    },
    getNextPageParam: lastPage => {
      if (lastPage.meta?.current_page < lastPage.meta?.last_page) {
        return {
          page: lastPage.meta.current_page + 1,
        };
      }
    },
  });
}
