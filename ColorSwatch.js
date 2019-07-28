import React from 'react';
import { View } from 'react-native';

const Color = (props) => {
  return (
    <View>
        <View style={{height: 100, width: 100, margin: 1, backgroundColor: props.color}} />
    </View>
  )
}

export default Color;