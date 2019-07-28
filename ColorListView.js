import React from 'react';
import { ScrollView } from 'react-native';
import Color from './ColorSwatch.js'

const ListView = (props) => {
  var mappedColors = props.colors.map((color, index) => {
    return (<Color color = {color.hex} key = {index}/>)
  });

  return (
    <ScrollView {...props}>
      {mappedColors}
    </ScrollView>
  )
}

export default ListView;

