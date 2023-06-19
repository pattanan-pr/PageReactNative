/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Profile from '../components/Profile';
import WorkToday from '../components/WorkToday';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ApprovalPart from '../components/ApprovalPart';
import WorkComponent from '../components/WorkComponent';
import WorkDone from '../components/WorkDone';
import {SafeAreaView} from 'react-native-safe-area-context';
import PartStatus from '../components/PartStatus';

const HomePage = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 16}}>
      <ScrollView>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>24 กรกฎาคม 2566</Text>
        </View>
        <View style={{marginTop: 19}}>
          <Profile />
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 38}}>
          <View style={{flexDirection: 'row'}}>
            <Text>งานวันนี้</Text>
            <Text>(6)</Text>
          </View>
          <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
          <Text>ทั้งหมด</Text>
          <Text></Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 16.5}}>
          <ScrollView horizontal={true}>
          <WorkToday color={'#1570EF'} />
           <WorkToday color={'#DC6803'} />
          </ScrollView>
        </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 32.5}}>
            <Text>อะไหล่รออนุมัติ</Text>
          <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
          <Text>ทั้งหมด</Text>
          <Text> ></Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 16, flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text>ทั้งหมด</Text>
          </TouchableOpacity>
          <PartStatus text="เบิกอะไหล่"/>
          <PartStatus text="แลกอะไหล่"/>
          <PartStatus text="คืนอะไหล่"/>
        </View>
        <View style={{marginTop: 16}}>
          <ScrollView>
          <ApprovalPart />
          <ApprovalPart />
          <ApprovalPart />
          </ScrollView>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 32.5}}>
            <Text>งานเสร็จแล้ว</Text>
          <TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
          <Text>ทั้งหมด</Text>
          <Text> ></Text>
          </View>
          </TouchableOpacity>
        </View>
         <View style={{marginTop:16}}>
          <ScrollView>
          <WorkDone color={'#12B76A'} />
          <WorkDone color={'#12B76A'} />
          <WorkDone color={'#12B76A'} />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
