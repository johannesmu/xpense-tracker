import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export const ListItem = ( props ) => {
  return (
    <View style={listItemStyles.listView}>
      <Text style={listItemStyles.listCategory}>
        {props.category}
      </Text>
      <Text style={listItemStyles.listAmount}>
        ${props.amount}
      </Text>
      <Button title="del" onPress={() => {props.delete(props.id)}} />
    </View>
  )
}

const listItemStyles = StyleSheet.create({
  listView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  listCategory: {
    color: '#cccccc'
  },
  listAmount: {
    color: '#000000',
    fontWeight: "700"
  }
})