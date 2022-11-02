import {apiClient} from '../lib/http';
import {useQuery} from '@tanstack/react-query';

export default function useGetLeaderboardQuery(params = {}) {
  return useQuery(['leaderboard', 'list', params], function () {
    return apiClient.get('leaderboard', {
      params,
    });
  });
}
