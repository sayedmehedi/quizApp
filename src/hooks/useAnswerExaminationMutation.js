import {apiClient} from '../lib/http';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export default function useAnswerExaminationMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async function (data) {
      return await apiClient.post(
        `examinations/${data.examinationId}/answers`,
        {
          answers: data.answers,
        },
      );
    },
    onSuccess() {
      queryClient.invalidateQueries(['examination', 'list']);
    },
  });
}
