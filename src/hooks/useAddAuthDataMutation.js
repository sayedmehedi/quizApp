import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export default function useAddAuthDataMutation() {
  const {setItem} = useAsyncStorage('auth-data');
  const queryClient = useQueryClient();

  return useMutation(
    function (data) {
      const jsonValue = JSON.stringify(data);
      return setItem(jsonValue);
    },
    {
      onSuccess() {
        queryClient.invalidateQueries(['auth-data']);
      },
    },
  );
}
