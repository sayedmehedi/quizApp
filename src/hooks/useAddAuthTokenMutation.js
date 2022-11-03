import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export default function useAddAuthTokenMutation() {
  const queryClient = useQueryClient();
  const {setItem} = useAsyncStorage('auth-token');

  return useMutation(
    function (data) {
      return setItem(data);
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(['auth-token']);
      },
    },
  );
}
