import {View, Text} from 'react-native';
import React from 'react';
import Rating from './Rating';

const UserProfile = () => {
  return (
    <View style={{marginLeft: 16}}>
      <Text>เข้มแข็ง อดทน</Text>
      <View style={{flexDirection: 'row'}}>
        <Rating />
        <Text>ช่างทั่วไป</Text>
      </View>
    </View>
  );
};

export default UserProfile;
