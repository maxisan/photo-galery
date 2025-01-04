import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
  User,
} from '@react-native-google-signin/google-signin';
import { signInWithGoogle } from '../google/singIn';

type Props = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#25292e',
    alignItems: "center",
  },
  text: {
    color: '#fff'
  },

})

const Landing = (props: Props) => {

  const [session, setSession] = useState<{ userInfo: User | null }>({ userInfo: null });

  useEffect(() => {
    const currentUser = GoogleSignin.getCurrentUser()
    if (currentUser) {
      setSession({ userInfo: currentUser })
    }
  }, [])

  const signIn = async () => {
    const token = await signInWithGoogle()
    console.log(token);

  };

  const getPhotos = async () => {
    const { accessToken, idToken } = await GoogleSignin.getTokens();
    console.log({ idToken, accessToken });

    const parsedAccessToken = accessToken.split('.')[1]
    console.log(parsedAccessToken)

    // const photosData = await getMediaItems(accessToken)
    // console.log(photosData);

  }

  const logOut = async () => {
    try {
      await GoogleSignin.signOut();
      setSession({ userInfo: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View
      style={styles.container}
    >
      {session.userInfo ? <Button title='Obtener fotos' onPress={getPhotos} /> : <Button title='Conectar con Google Photos' onPress={signIn} />}
      <Button title='Log out' onPress={logOut} />
    </View>
  )
}

export default Landing