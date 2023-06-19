/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import WorkComponent from './WorkComponent';

const WorkToday = ({color}) => {
  return (
    <WorkComponent color={color}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>ความคืบหน้า</Text>
        <Text>60%</Text>
      </View>
      <View
        style={{
          height: 8,
          width: 210,
          backgroundColor: color,
        }}></View>
    </WorkComponent>
  );
};

export default WorkToday;
