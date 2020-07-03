import React, { Component } from 'react'

import HomeScreen from './components/HomeScreen';
import RunningScreen from './components/RunningScreen';
import ResultsScreen from './components/ResultsScreen';

import { StackNavigator } from 'react-navigation'

export const Navigator = new StackNavigator({
  Home: { screen: HomeScreen, options={title:'Overview'} },
  Running: { screen: RunningScreen },
  Results: { screen: ResultsScreen },
},{
  initialRouteName: 'Home',
})

class Nav extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}
      
export default Nav