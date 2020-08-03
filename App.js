import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity, FlatList, ScrollView } from 'react-native';
// components
import RNPickerSelect from 'react-native-picker-select';
// custom components
import { Bar } from './components/Bar';
import { Label } from './components/Label';

export default class App extends Component {
  state = {
    selectedValue: 'transport',
    expenseValue: 0,
  }
  listData = []

  renderList = ({item}) => (
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:10}}>
      <Text>{ item.category}</Text>
      <Text>${ item.amount }</Text>
    </View>
  )

  addItem = () => {
    this._input.clear()
    if( isNaN(this.state.expenseValue) || this.state.expenseValue == 0 ) {
      return;
    }
    let item = {
      id: new Date().getTime().toString(), 
      amount: this.state.expenseValue, 
      category: this.state.selectedValue
    }
    this.listData.push(item)
    this.setState({expenseValue: 0, selectedValue: null })
  }

  render() {
    return (
      <SafeAreaView>
        <Bar text="Expenses" size={16} color="white" background={primary} />
        <View style={styles.container}>
          <Label text="Add your expense" size={16} />
          <View style={[styles.row]}>
            <TextInput 
              style={styles.input} 
              placeholder="$ add amount" 
              onChangeText={ text => this.setState({expenseValue: parseFloat(text) }) }
              keyboardType="number-pad"
              ref={(exp) => this._input = exp }
            />
            <RNPickerSelect
              onValueChange={value => this.setState({selectedValue: value})}
              items={[
                {label: 'Food', value: 'food'},
                {label: 'Transport', value: 'transport'},
                {label: 'Grocery', value: 'grocery'},
                {label: 'Utility', value: 'utility'},
                {label: 'Fuel', value: 'fuel'},
                {label: 'Rent', value: 'rent'},
              ]}
              style={picker}
              value={this.state.selectedValue}
              placeholder={placeholder}
              useNativeAndroidPickerStyle={false}
            />
          </View>
          
          <TouchableOpacity 
            style={[styles.button, {zIndex:4000} ]} 
            onPress={item => this.addItem()
          }>
            <Label text="Record" size={14} color="white" align="center" />
          </TouchableOpacity>
          
            <SafeAreaView style={{zIndex:500}}>
              <FlatList 
                data={this.listData} 
                renderItem={this.renderList}
                keyExtractor={ item => item.id }
                extraData={this.state.expenseValue}
                style={{zIndex:400}}
              >
              </FlatList>
            </SafeAreaView>
        </View>
      </SafeAreaView>
    );
  }
}

const primary = 'hsla(330, 38%, 65%, 1)';
const secondary = 'hsla(175, 100%, 95%, 1)';
const placeholder = { label: 'pick a type', value: null, color: 'black'}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  header: {
    backgroundColor: primary,
    width: '100%',
    minHeight: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'stretch'
  },
  input: {
    backgroundColor: secondary,
    maxWidth: '50%',
    padding: 10,
    borderColor: primary,
    borderWidth: 1,
    flex: 1
  },
  button: {
    backgroundColor: primary,
    zIndex: 10
  },
});

const picker = StyleSheet.create({
  inputIOS: {
    padding: 10,
    borderColor: primary,
    borderWidth: 1,
    minWidth: '50%',
  },
  inputAndroid: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: primary,
    paddingRight: 30,
    minWidth: '50%' 
  },

})


// --russian-violet: hsla(255, 45%, 18%, 1);
// --turquoise-blue: hsla(175, 100%, 65%, 1);
// --cadet-blue: hsla(187, 26%, 56%, 1);
// --burlywood: hsla(35, 57%, 70%, 1);
// --opera-mauve: hsla(330, 38%, 65%, 1);

