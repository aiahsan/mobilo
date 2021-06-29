import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackScreen from './stackNavigation'
import CustomDrawerContent from './cutomDrawerCom'
const Drawer = createDrawerNavigator();

export default () => <Drawer.Navigator  drawerContent={props => <CustomDrawerContent />} screenOptions={{
    headerShown: false
}}

>
<Drawer.Screen name="Home" component={StackScreen} />
</Drawer.Navigator>
