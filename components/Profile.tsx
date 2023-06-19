/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React from 'react';
import UserProfile from './UserProfile';

const Profile = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../assets/images/userMock.png')}
          style={{width: 40, height: 40, borderRadius: 100}}
        />
        <View style={{position: 'absolute', bottom: 2, right: 2}}>
          <View
            style={{
              backgroundColor: '#A0F3C1',
              width: 16,
              height: 16,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            //Success/Dark/Sucess
          >
            <View
              style={{
                backgroundColor: '#12B76A',
                width: 12,
                height: 12,
                borderRadius: 100,
              }}
              //Success/Light/Success
            />
          </View>
        </View>
      </View>
      <UserProfile />
    </View>
  );
};

export default Profile;
