/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonInit = ({text, onpress}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#004080',
          padding: 10,
          width: '100%',
          borderRadius: 8,
          height: 48,
        }}
        onPress={onpress}>
        <Text style={{color: '#fff', fontWeight: '600', fontSize: 16}}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonInit;
