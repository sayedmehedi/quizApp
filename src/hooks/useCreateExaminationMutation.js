import {apiClient} from '../lib/http';
import {useMutation, useQueryClient} from '@tanstack/react-query';

export default function useCreateExaminationMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: function (data) {
      return apiClient
        .post('examinations/create', {
          ques_kind: data.quesKind,
          ques_count: data.quesCount,
          difficulty_level: data.difficultyLevel,
        })
        .then(response => response.data);
    },
    onSuccess() {
      queryClient.invalidateQueries(['examination', 'list']);
    },
  });
}
