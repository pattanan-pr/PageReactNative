import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';

const LoginLayout = ({title, children}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 79,
        }}>
        <View style={{width: 40, height: 40.69}}>
          <Image source={require('../assets/images/logo.png')} />
        </View>
        <View style={{marginTop: 40}}>
          <Text
            style={{fontSize: 28, fontWeight: '400'}}
            // variant = h3
          >
            {title}
          </Text>
        </View>
        <View>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default LoginLayout;
