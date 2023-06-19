import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const WelcomeBackground = ({children}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#004385', '#80C245']}
        //background: linear-gradient(180deg, #004385 0%, #80C245 100%);
        style={styles.linearGradient}>
        <Image source={require('../assets/images/test.png')} />
        <View>{children}</View>
      </LinearGradient>
    </View>
  );
};

export default WelcomeBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
  },
});
