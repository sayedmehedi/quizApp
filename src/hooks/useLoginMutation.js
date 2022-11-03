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
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(googleCredential);

      return await apiClient
        .post('auth/login', {
          oauth_token: idToken,
        })
        .then(response => response.data);
    },
  });
}
