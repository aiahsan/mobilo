import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabScreen from './tabNavigation';
import ProductPage from '../../screens/product';
import {Home,Product} from '../../utiles/routes'
const Stack = createStackNavigator();

export default () => <Stack.Navigator screenOptions={{
    headerShown: false
}}

>
<Stack.Screen name={Home} component={TabScreen} />
<Stack.Screen name={Product} component={ProductPage} />

</Stack.Navigator>
