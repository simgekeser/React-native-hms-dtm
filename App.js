import React, {Component} from 'react';
import {Text, Button, Picker, View, StyleSheet, TextInput} from 'react-native';
import haSDK from 'react-native-ha-interface';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      price: 0,
      description: '',
    };
  }
  _sendEvent = async () => {
    let obj = {
      category: this.state.category,
      price: this.state.price,
      description: this.state.description,
      date: new Date(),
    };
    try {
      haSDK.onEvent('testDtmEvent', obj);
      console.log('obj', obj);
      alert('evet is sent!');
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textTitleView}>
          <Text style={styles.title}>DTM REACT NATIVE DOME APP</Text>
        </View>
        <View style={{flex: 2}}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.expenceTitle}>Create Demo Expense</Text>
          </View>

          <View style={styles.inputStyle}>
            <Picker
              selectedValue={this.state.category}
              onValueChange={(itemValue) =>
                this.setState({category: itemValue})
              }>
              <Picker.Item label="Select Category" />
              <Picker.Item label="Transportation" value="Transportation" />
              <Picker.Item label="Market" value="Market" />
              <Picker.Item label="Shopping" value="Shopping" />
              <Picker.Item label="Home" value="Home" />
              <Picker.Item label="Fun" value="Fun" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
          <View style={{justifyContent: 'center'}}>
            <TextInput
              clearButtonMode="always"
              placeholder="Price"
              keyboardType="numeric"
              onChangeText={(text) => {
                this.setState({price: text});
              }}
              style={styles.inputStyle}
            />
            <TextInput
              clearButtonMode="always"
              placeholder="Additional Information"
              onChangeText={(text) => {
                this.setState({description: text});
              }}
              style={styles.inputStyle}
            />
            <View style={styles.buttonStyle}>
              <Button
                color="#ff5c5c"
                onPress={() => this._sendEvent()}
                title="Add"
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  textTitleView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    color: '#4A1D40',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  expenceTitle: {
    fontSize: 17,
    color: '#4A1D40',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  buttonStyle: {
    paddingTop: 10,
    marginRight: 50,
    marginLeft: 50,
  },
  inputStyle: {
    borderColor: 'gray',
    borderWidth: 0.5,
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
  },
});

export default App;
