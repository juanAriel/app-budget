import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ContentCard from '../molecules/ContentCard'

const Home = ()=> {
  return (
    <View style={styles.container}>
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D5A80",
    alignItems: "center",
    justifyContent: "center",
  },
  textWelcome: {
    color: "#98C1D9",
    fontSize: 50,
    fontWeight: "bold",
  },
  imageApp: {
    marginTop: 80,
    width: 150,
    height: 150,
    bottom: 50,
    resizeMode: "contain",
  },
});

export default Home