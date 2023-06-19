import {View, Text} from 'react-native';
import React from 'react';
import InputBox from '../components/InputBox';
import ButtonInit from '../components/ButtonInit';
import LoginLayout from '../components/LoginLayout';

const Registration = ({navigation}) => {
  return (
    // <View style={{flex: 1, justifyContent: 'center'}}>
    <LoginLayout title="ลงชื่อเข้าใช้">
      <View style={{marginTop: 17.5}}>
        <Text
        // Desktop/Label
        >
          เบอร์โทรศัพท์
          <Text
          // color = "error.light.error"
          >
            *
          </Text>
        </Text>
      </View>
      <View style={{marginTop: 5.5}}>
        <Text //Desktop/Caption
        >
          กรุณากรอกเบอร์โทรศัพท์ขององค์กร
        </Text>
      </View>
      <View style={{marginTop: 8}}>
        <InputBox textholder="ยืนยันรหัส" />
      </View>
      <View style={{marginTop: 40}}>
        <ButtonInit
          text="ลงชื่อเข้าใช้"
          onpress={() => navigation.navigate('ConfirmOTP')}
        />
      </View>
    </LoginLayout>
    // </View>
  );
};

export default Registration;
