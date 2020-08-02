import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const Bar = (props) => {
  if( props.image ) {
    return(
      <View style={ styles.bar }>
        <Image src={props.image}/>
        <Text style={
            { 
              color: props.color, 
              fontSize: props.size, 
            }
          }>
            {props.text}
        </Text>
      </View>
    )
  }
  else{
    return(
      <View style={[styles.bar, {backgroundColor: props.background }]}>
        <Text style={
            { color: props.color, fontSize: props.size }
          }>
            {props.text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bar: {
    width: '100%',
    minHeight: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  }
})