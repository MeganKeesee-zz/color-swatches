import React from 'react';
import { StyleSheet } from 'react-native';
import colorData from './mobile-materials/arrayOfColors.js';
import ListView from './ColorListView.js';


export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      colors: colorData
    }
  }

  render() {
    return (
      <ListView 
        colors={this.state.colors} 
        contentContainerStyle={styles.list}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
