import { authorize } from 'react-native-app-auth';
import googleConfig from './config.json'

const CLIENT_ID = googleConfig.installed.client_id

const config = {
    clientId: CLIENT_ID,
    redirectUrl: `com.googleusercontent.apps.${CLIENT_ID}:/oauth2redirect/google`,
    scopes: ['https://www.googleapis.com/auth/photoslibrary.readonly'],
    serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
        tokenEndpoint: 'https://oauth2.googleapis.com/token',
    },
};

export async function signInWithGoogle() {
    try {
        const authState = await authorize(config);
        console.log(authState.accessToken);

        return authState.accessToken; // Devuelve el token de acceso
    } catch (error) {
        console.error('Error al iniciar sesión con Google:', error);
        throw error;
    }
}
