import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const PartStatus = ({text}) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: '#EAECF0',
          width: 82,
          height: 22,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 8,
        }}
        // Surface/Light/Level 3
      >
        <Text
          style={{color: '#595959'}}
          //Warning/Dark/On Warning
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PartStatus;
