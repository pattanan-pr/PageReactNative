/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';

const Rating = () => {
  return (
    <View
      style={{
        backgroundColor: '#FEF0C7',
        width: 47,
        height: 22,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      ///* Warning/Dark/Warning */
    >
      <Text
        style={{color: '#B54708'}}
        //Warning/Dark/On Warning
      >
        4.2
      </Text>
    </View>
  );
};

export default Rating;
