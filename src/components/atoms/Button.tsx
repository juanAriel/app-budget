import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
    title:string;
    onPress?:()=> void ;
    className?:string;
    style?: object;
}
const  Button:React.FC<ButtonProps> =({title, onPress,style, className}) => {
  return (
    <TouchableOpacity  onPress={onPress} style={[styles.button,style]}>
      {<Text style={styles.text} >{title}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:"#98C1D9",
    borderRadius:10,
    borderWidth: 2,
    width: 150,
    alignItems:"center",
    margin:5
  },
  text:{
    fontSize:25,
    fontWeight: "bold",
    padding:5,
    color:"#3D5A80"
  }
})

export default Button