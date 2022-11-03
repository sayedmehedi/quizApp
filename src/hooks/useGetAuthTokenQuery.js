import {apiClient} from '../lib/http';
import {useQuery} from '@tanstack/react-query';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export default function useGetAuthTokenQuery() {
  const {getItem} = useAsyncStorage('auth-token');

  return useQuery(
    ['auth-token'],
    function () {
      return getItem();
    },
    {
      networkMode: 'always',
      onSuccess(token) {
        if (token) {
          apiClient.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${token}`;
        }
      },
    },
  );
}
