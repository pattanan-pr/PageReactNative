/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ApprovalPart = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#D6D6D6',
        backgroundColor: '#ffff',
        alignItems: 'center',
        //Outline/Light
      }}>
      <Image
        source={require('../assets/images/userMock.png')}
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          marginLeft: 16,
        }}
      />
      <View
        style={{
          flex: 1,
          marginLeft: 16,
          marginTop: 21,
          marginRight: 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>12/06/2566 23:01</Text>
          <View
            style={{
              backgroundColor: '#FEF0C7',
              width: 71,
              height: 22,
              borderRadius: 100,
              alignItems: 'center',
              marginRight: 16,
            }}
            ///* Warning/Dark/Warning */
          >
            <Text style={{fontSize: 12}}>รออนุมัติ</Text>
          </View>
        </View>
        <View style={{marginTop: 15.5, marginBottom: 18.5}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 16,
            }}>
            <Text style={{fontSize: 14}}>XXXX</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 18}}>1</Text>
              <Text style={{fontSize: 10}}>ชิ้น</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ApprovalPart;
