/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import WelcomeBackground from '../components/WelcomeBackground';
import WelcomeBox from '../components/WelcomeBox';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const WelcomePage = () => {
  return (
    <WelcomeBackground>
      <View style={{width: wp('100%'), height: 214}}>
        <WelcomeBox />
      </View>
    </WelcomeBackground>
  );
};

export default WelcomePage;
