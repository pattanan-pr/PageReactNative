/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import Registration from '../screen/Registration';
import {NavigationContainer} from '@react-navigation/native';
import ConfirmOTP from '../screen/ConfirmOTP';
import WelcomePage from '../screen/WelcomePage';
import HomePage from '../screen/HomePage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import Content from '../screen/Content';
import DrawMoney from '../screen/DrawMoney';
import SparePart from '../screen/SparePart';
import MyProfile from '../screen/MyProfile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SquareTabBarIcon = ({focused}) => {
  return (
    <View
      style={{
        width: 24,
        height: 4,
        marginTop: 0,
        backgroundColor: focused ? '#004080' : '#fff',
        position: 'absolute',
        top: 0,
      }}
    />
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => <SquareTabBarIcon focused={focused} />,
        tabBarLabel: ({focused}) => {
          let label;
          if (route.name === 'Home') {
            label = 'หน้าแรก';
          } else if (route.name === 'Content') {
            label = 'ใบงาน';
          } else if (route.name === 'DrawMoney') {
            label = 'เบิกเงิน';
          } else if (route.name === 'SparePart') {
            label = 'อะไหล่';
          } else if (route.name === 'MyProfile') {
            label = 'บัญชีของฉัน';
          }

          return <Text>{label}</Text>;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Content"
        component={Content}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="DrawMoney"
        component={DrawMoney}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="SparePart"
        component={SparePart}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="MyProfile"
        component={MyProfile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmOTP"
          component={ConfirmOTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default HomeStack;
