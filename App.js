import * as React from 'react';
import { Text, View, Image, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// pages
import Home from './JS/Home'
import GeneralPoints from './JS/GeneralPoints'
import BodySytems from './JS/BodySystems'
import Viewer from './JS/Viewer'

// icons
import HomeIcon from './Images/HomeIcon.png'
import GeneralPointsIcon from './Images/GeneralPoints.png'
import BodySytemsIcon from './Images/BodySystemsIcon.png'

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Setting a timer for a long period of time'], ['AsyncStorage has been extracted fro']);

function HomeScreen() {
  return (
    <Home />
  );
}

function GPScreen({navigation}) {
  return (
    <GeneralPoints navigation={navigation}/>
  );
}

function BSScreen({navigation}) {
  return (
    <BodySytems navigation={navigation} />
  );
}

function ViewerScreen({navigation, route}) {
  return (
    <Viewer navigation={navigation} route={route} />
  );
}


const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: '#56b7b1',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#56b7b1',
    border: '#FFFFFF',
    notification: '#FFFFFF',
  },
};




export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarShowLabel: true, headerShown: false, tabBarIcon: ({focused}) => (<Image style={{width :40, height: 40, marginTop: 5}} source={HomeIcon} />), }} />
        <Tab.Screen name="General Points" component={GPScreen} options={{ tabBarShowLabel: true, headerShown: false, tabBarIcon: ({focused}) => (<Image style={{width :40, height: 40, marginTop: 5}} source={GeneralPointsIcon} />), }} />
        <Tab.Screen name="Body Systems" component={BSScreen} options={{ tabBarShowLabel: true, headerShown: false, tabBarIcon: ({focused}) => (<Image style={{width :40, height: 40, marginTop: 5}} source={BodySytemsIcon} />), }} />
        <Tab.Screen name="Viewer" component={ViewerScreen} options={{ tabBarShowLabel: true, headerShown: false, tabBarStyle: { display: 'none' }, tabBarButton: (props) => null }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}