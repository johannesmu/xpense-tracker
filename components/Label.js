import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Label = ( props ) => {
  return(
    <Text style={
      {
        fontSize: props.size,
        color: props.color,
        textAlign: props.align ? props.align : 'left',
        padding: 10
      }
    }>
      {props.text}
    </Text>
  )
}