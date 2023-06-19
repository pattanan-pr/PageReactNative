/* eslint-disable react-native/no-inline-styles */
import {View, TextInput} from 'react-native';
import React, {useState} from 'react';

const InputBox = ({textholder}) => {
  const [enteredName, setEnteredName] = useState('');

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 8,
        height: 48,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 15,
          borderWidth: 1,
          paddingHorizontal: 10,
          borderColor: '#D6D6D6',
        }}>
        <TextInput
          placeholder={textholder}
          value={enteredName}
          onChangeText={text => setEnteredName(text)}
          style={{
            width: '100%',
            // borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 15,
            padding: 4,
            paddingLeft: 14,
            height: 48,
            color: '#ADADAD',
          }}
        />
      </View>
    </View>
  );
};

export default InputBox;
