import {apiClient} from '../lib/http';
import {useQuery} from '@tanstack/react-query';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export default function useGetProfileQuery() {
  const {getItem} = useAsyncStorage('auth-token');

  return useQuery(
    ['profile'],
    function () {
      return apiClient.get('profile').then(response => response.data);
    },
    {},
  );
}
