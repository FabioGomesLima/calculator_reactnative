import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default class App extends Component {
  state = {
    displayValue: '0'
  }

  // metodos

  addDigit = n => {
    this.setState({ displayValue: n })
  }
  // limpar memoria da calculadora
  clearMemory = () => {
    this.setState({ displayValue: '0' })
  }

  setOperation = operation => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label="AC" triple onClick={this.clearMemory} />
          <Button label="/" operation onClick={() => this.setOperation} />
          <Button label="7" onClick={() => this.addDigit} />
          <Button label="8" onClick={() => this.addDigit} />
          <Button label="9" onClick={() => this.addDigit} />
          <Button label="*" operation onClick={() => this.setOperation} />
          <Button label="4" onClick={() => this.addDigit} />
          <Button label="5" onClick={() => this.addDigit} />
          <Button label="6" onClick={() => this.addDigit} />
          <Button label="-" operation onClick={() => this.setOperation} />
          <Button label="1" onClick={() => this.addDigit} />
          <Button label="2" onClick={() => this.addDigit} />
          <Button label="3" onClick={() => this.addDigit} />
          <Button label="+" operation onClick={() => this.setOperation} />
          <Button label="0" double onClick={() => this.addDigit} />
          <Button label="." onClick={() => this.addDigit} />
          <Button label="=" operation onClick={() => this.setOperation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
