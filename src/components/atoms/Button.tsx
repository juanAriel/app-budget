import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
    title:string;
    onPress?:()=> void ;
    className?:string;
}
const  Button:React.FC<ButtonProps> =({title, onPress, className}) => {
  return (
    <TouchableOpacity  onPress={onPress} style={styles.button}>
      {<Text style={styles.text} >{title}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:"#98C1D9",
    borderRadius:10
  },
  text:{
    fontSize:25,
    fontWeight: "bold",
    padding:10,
    color:"#3D5A80"
  }
})

export default Button