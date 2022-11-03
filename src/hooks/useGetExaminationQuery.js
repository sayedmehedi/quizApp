import {apiClient} from '../lib/http';
import {useQuery} from '@tanstack/react-query';

export default function useGetExaminationQuery(examinationId) {
  return useQuery({
    queryKey: ['examination', 'details', examinationId],
    queryFn: function () {
      return apiClient
        .get(`examinations/${examinationId}`)
        .then(response => response.data);
    },
  });
}
