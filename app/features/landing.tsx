import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

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
  return (
    <View
      style={styles.container}
    >
      <Button title='Conectar con Google Photos' />
    </View>
  )
}

export default Landing