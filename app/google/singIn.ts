import * as AuthSession from 'expo-auth-session';
import config from './config.json'

const CLIENT_ID = config.installed.client_id;
const REDIRECT_URI = AuthSession.makeRedirectUri();

export async function signInWithGoogle() {
    const authUrl = `https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=https://www.googleapis.com/auth/photoslibrary.readonly`;
    // const result = await AuthSession.startAsync({ authUrl });
    // if (result.type === 'success') {
    //     return result.params.access_token;
    // }
}
