import React from 'react';
import {
  TabNavigator
} from 'react-navigation';
import {
  Icon
} from 'react-native-elements';

import Beers from './screens/beers';
import Search from './screens/search';
import Settings from './screens/settings';

export const AppRoot = TabNavigator({
  Beers: {
    screen: Beers,
    navigationOptions: {
      tabBarLabel: 'Beers',
      tabBarIcon: ({tintColor}) => <Icon name="movie" size={30} color={tintColor}/>,
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