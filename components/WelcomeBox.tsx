/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import ButtonInit from './ButtonInit';
import {useNavigation} from '@react-navigation/native';

const WelcomeBox = () => {
  const navigation = useNavigation();

  const goToNextScreen = () => {
    navigation.navigate('Registration');
  };
  return (
    <View
      style={{
        backgroundColor: '#ffff',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}>
      <View
        style={{
          marginHorizontal: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{marginTop: 16, fontSize: 28, fontWeight: '400'}}
          //Text/Light/Level 1
        >
          ยินดีต้อนรับ
        </Text>
        <Text
          style={{marginTop: 8, textAlign: 'center'}}
          //Text/Light/Level 2
        >
          Lorem ipsum dolor sit amet consectetur. Vel accumsan nibh habitasse ut
          nunc nibh.
        </Text>
      </View>
      <View style={{marginTop: 24, marginHorizontal: 16}}>
        <ButtonInit text="ลงชื่อเข้าใช้" onpress={goToNextScreen} />
      </View>
    </View>
  );
};

export default WelcomeBox;
