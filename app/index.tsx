import { Text, View, StyleSheet } from "react-native";
import Landing from "./features/landing";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function Index() {
  GoogleSignin.configure();

  return (
    <Landing />
  );
}
