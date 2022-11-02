import {apiClient} from '../lib/http';
import {useMutation} from '@tanstack/react-query';

export default function useAnswerExaminationMutation() {
  return useMutation({
    mutationFn: async function (data) {
      return await apiClient.post(
        `examinations/${data.examinationId}/answers`,
        {
          answers: data.answers,
        },
      );
    },
  });
}
