import React from 'react';
import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';
import {
  Icon
} from 'react-native-elements';

import Beers from './components/beers';
import Search from './components/search';
import Settings from './components/settings';

export const AppRoot = TabNavigator({
  Beers: {
    screen: beersScreen,
    navigationOptions: {
      tabBarLabel: 'Beers',
      tabBarIcon: ({tintColor}) => <Icon name="beers" size={30} color={tintColor}/>,
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => <Icon name="search" size={30} color={tintColor}/>
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor}) => <Icon name="settings" size={30} color={tintColor}/>
    },
  },
});