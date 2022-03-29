import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

/**
 * Props:
 * onChangeText: callbackFunction
 * value:number
 */
export function Input(props){
  return (
    <TextInput 
      style={styles.container}
      keyboardType="numeric"
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
}