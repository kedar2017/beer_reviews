import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Beers from './components/beers';
import BeerDetails from './components/beerDetails'
import Search from './components/search';
import Settings from './components/settings';

const beersScreen = StackNavigator({
    Beers: {
      screen: Beers,
      navigationOptions: {
        title: 'Beers',
        headerTitleStyle: {
          color: '#a9a9a9'
        },
        headerStyle: {
          backgroundColor: 'black'
        }
      }
    },
    BeerDetails: {
      screen: BeerDetails,
      navigationOptions: {
        title: 'Beer Details',
        headerTitleStyle: {
          color: '#a9a9a9'
        },
        headerStyle: {
          backgroundColor: 'black'
        }
      }
    }
  }, {
    headerMode: 'float',
    cardStyle: {
      backgroundColor: '#4a4a4a'
    }
  });

export const AppRoot = TabNavigator({
  Beers: {
    screen: Beers,
    navigationOptions: {
      tabBarLabel: 'Beers',
      tabBarIcon: ({tintColor}) => <Icon name="beers" size={30} color={tintColor}/>,
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => <Icon name="search" size={30} color={tintColor}/>
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor}) => <Icon name="settings" size={30} color={tintColor}/>
    }
  }
  }, {
    tabBarOptions: {
    activeTintColor: '#dedede',
    inactiveTintColor: '#a9a9a9',
    style: {
        backgroundColor: 'black'
    }
    }
});