import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ButtonInit from '../components/ButtonInit';
import InputOTP from '../components/InputOTP';
import LoginLayout from '../components/LoginLayout';

const ConfirmOTP = ({navigation}) => {
  const [time, setTime] = useState(60);
  return (
    <LoginLayout title="กรอกรหัส OTP">
      <View style={{marginTop: 4}}>
        <Text
        //Mobile/Subtitle 3
        >
          รหัสจะถูกส่ง SMS ไปที่เบอร์ 000 000 0000
        </Text>
      </View>
      <View style={{marginTop: 16}}>
        <InputOTP
          length={6}
          disable={false}
          value={['1', '2', '3', '1', '2', '3']}
          onChange={value => {
            console.log('New OTP value:', value);
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Text
        //Text/Light/Level 2
        >
          รหัส OTP หมดอายุภายใน {time} วินาที
        </Text>
      </View>
      <View style={{marginTop: 8}}>
        <ButtonInit
          text="ยืนยันรหัส"
          onpress={() => navigation.navigate('BottomTabNavigator')}
        />
      </View>
      <TouchableOpacity
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 21}}>
        <Text
        //Desktop/Button
        >
          ขอรหัส OTP อีกครั้ง
        </Text>
      </TouchableOpacity>
    </LoginLayout>
  );
};

export default ConfirmOTP;
