/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';

const WorkComponent = ({color, children}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        width: 242,
        height: 242,
        borderRadius: 8,
        borderLeftColor: color,
        borderLeftWidth: 3,
        marginHorizontal: 8,
      }}>
      <View style={{marginHorizontal: 16}}>
        <View
          style={{
            marginTop: 16,
            borderBottomColor: '#D6D6D6',
            borderBottomWidth: 1,
          }}>
          <Text>งานซ่อม</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>09:00</Text>
            <View style={{marginLeft: 4, marginBottom: 19}}>
              <Text>22/07/2566</Text>
            </View>
          </View>
        </View>
        <View style={{marginTop: 16}}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text>เลขที่ใบงาน</Text>
            <Text>จำนวนเครื่อง</Text>
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text>BM-12345678</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>2</Text>
              <View style={{marginLeft: 8}}>
                <Text>เครื่อง</Text>
              </View>
            </View>
          </View>
          <View
            style={{flexDirection: 'row', marginTop: 16, alignItems: 'center'}}>
            <Image
              source={require('../assets/images/userMock.png')}
              style={{width: 24, height: 24, borderRadius: 100}}
            />
            <View style={{marginLeft: 6}}>
              <Text>จริงใจ อดทน</Text>
              <Text>โรงแรมมณเฑียร</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 16,
              justifyContent: 'space-between',
            }}>
            <View>{children}</View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WorkComponent;
