import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Navigator from './src/components/navigations/navigation'
import MobileReducer from './src/reducers/';
import { AppLoading } from 'expo';
import {
  useFonts,
  Ubuntu_400Regular,Ubuntu_500Medium,Ubuntu_700Bold
} from '@expo-google-fonts/ubuntu';
const store = createStore(MobileReducer);
export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,Ubuntu_500Medium,Ubuntu_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else
  return (
  //
  <>
  <StatusBar backgroundColor="#ed1b24"/>
    <Provider store={store}>
  <Navigator/>
</Provider>
  </>
  
  
    
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
