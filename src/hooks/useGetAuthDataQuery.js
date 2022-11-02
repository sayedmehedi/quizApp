import {apiClient} from '../lib/http';
import {useQuery} from '@tanstack/react-query';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export default function useGetAuthDataQuery() {
  const {getItem} = useAsyncStorage('auth-data');

  return useQuery(
    ['auth-data'],
    async function () {
      const value = await getItem();

      if (value !== null) {
        return JSON.parse(value);
      }

      return null;
    },
    {
      networkMode: 'always',
      onSuccess(data) {
        if (data) {
          apiClient.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${data.token}`;
        }
      },
    },
  );
}
