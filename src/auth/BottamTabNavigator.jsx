import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

// import {colors} from '@/theme/colors';
import Home from '../screens/Home';
import {colors} from '../themes/colors';
import User from '../screens/User';
import New from '../screens/New';
import HotTrends from '../screens/HotTrends';
import Brands from '../screens/Brands';
import Register from '../screens/Register';
import {BrandIcon} from '../themes/icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#EA5455',
        tabBarInactiveTintColor: colors.ICON_COLOR,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Entypo
              name="home"
              size={26}
              color={focused ? colors.PINK : colors.ICON_COLOR}
            />
          ),
        }}
      />

      <Tab.Screen
        name="HotTrends"
        component={HotTrends}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name="circle-notifications"
              size={30}
              color={focused ? colors.PINK : colors.ICON_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Entypo
              name="new"
              size={24}
              color={focused ? colors.PINK : colors.ICON_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Brands"
        component={Brands}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <BrandIcon
              name="brand"
              size={24}
              color={focused ? colors.PINK : colors.ICON_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Register}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesome
              name="user-circle"
              size={24}
              color={focused ? colors.PINK : colors.ICON_COLOR}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
