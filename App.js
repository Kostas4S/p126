import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PickImage from './screens/camera';

export default class App extends React.Component{
  render(){
    return(
      <PickImage/>
    )
  }
}
