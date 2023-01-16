import {apiClient} from '../lib/http';
import auth from '@react-native-firebase/auth';
import {useMutation} from '@tanstack/react-query';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function useLoginMutation() {
  return useMutation({
    mutationFn: async function () {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      await GoogleSignin.signIn();
      const tokens = await GoogleSignin.getTokens();

      // Create a Google credential with the token
      // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // await auth().signInWithCredential(googleCredential);
      // const oauthToken = googleCredential.secret;

      const response = await apiClient.post('auth/login', {
        oauth_token: tokens.accessToken,
      });

      return response.data;
    },
  });
}
