import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
    title:string;
    onPress?:()=> void ;
    className?:string;
}
const  Button:React.FC<ButtonProps> =({title, onPress, className}) => {
  return (
    <TouchableOpacity  onPress={onPress}>
      {<Text>{title}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

})

export default Button