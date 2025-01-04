import Landing from "./features/landing";
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export default function Index() {
  GoogleSignin.configure({
    webClientId: '440103799852-3rd7ocj3q1mi9tpckfg172r5r1lf0o25.apps.googleusercontent.com',
    offlineAccess: true,
    scopes: ['https://www.googleapis.com/auth/photospicker.mediaitems.readonly']
  });

  return (
    <Landing />
  );
}
