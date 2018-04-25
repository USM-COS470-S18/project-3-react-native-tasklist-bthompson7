import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {StackNavigator} from 'react-navigation';
import TaskList from './components/TaskList';
import TaskDetails from './components/TaskDetails';

//Bulk of the navigation is handled here
const AppNavigation = StackNavigator({
  TaskList: { screen: TaskList },
  TaskDetails: { screen: TaskDetails },
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}
);


type Props = {};
export default class App extends Component<Props> {
  render() {
    return(
    <AppNavigation/>
  );
  }
}
