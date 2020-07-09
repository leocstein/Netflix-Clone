import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import Home from '../screen/Home';
import More from '../screen/More';
import Search from '../screen/Search';
import ComingSoon from '../screen/ComingSoon';
import Downloads from '../screen/Downloads';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
          borderTopColor: 'transparent',
        },
        activeTintColor: 'white',
        showIcon: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Busca"
        component={Search}
        options={{
          tabBarLabel: 'Busca',
          tabBarIcon: ({ focused, color, size }) => {
            return <Feather name="search" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Em Breve"
        component={ComingSoon}
        options={{
          tabBarLabel: 'Em Breve',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons
                name="folder-multiple-image"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Downloads}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({ focused, color, size }) => {
            return <Feather name="download" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <MaterialCommunityIcons name="menu" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
