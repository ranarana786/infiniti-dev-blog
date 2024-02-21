import React from 'react';
import SignUpScreen from './src/Screens/signUp.screen';
import LoginScreen from './src/Screens/login.screen';
import HomeScreen from './src/Screens/home.screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firebase from 'firebase/compat/app';
import '@firebase/auth';

function App() {
  const Stack = createNativeStackNavigator();

  // const firebaseConfig = {
  //   apiKey: 'AIzaSyD8hqaBCmBOh-5Ozfj096ERMYC-tdz1wgI',

  //   authDomain: 'infiniti-dev-blog.firebaseapp.com',

  //   projectId: 'infiniti-dev-blog',

  //   storageBucket: 'infiniti-dev-blog.appspot.com',

  //   messagingSenderId: '199740511151',

  //   appId: '1:199740511151:web:eafa7cce8f06483b99555a',
  // };

  // if (!firebase.apps.length) {
  //   firebase.initializeApp(firebaseConfig);
  //   console.log('firebase has connected');
  // } else {
  //   console.log('firebase has not conneted');
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
