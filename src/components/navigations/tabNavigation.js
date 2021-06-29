import React from 'react';
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome, Feather, MaterialCommunityIcons, Ionicons, MaterialIcons, EvilIcons, Entypo, Foundation, FontAwesome5 } from '@expo/vector-icons';
import Home from '../../screens/home'
const Tab = createBottomTabNavigator();
export default () => <Tab.Navigator tabBarOptions={{
    showLabel: false

}} screenOptions={{
    headerShown: false
}}

>
    <Tab.Screen options={() => ({

        tabBarIcon: () => {
            return (
                <Entypo name="home" size={24} color="#999999" />
            );
        }
    })} name="TabHome" component={Home} />
    <Tab.Screen options={() => ({
        tabBarIcon: () => {
            return (
                <Entypo
                    name="chat"
                    size={24}
                    color="#999999" />
            );
        }
    })} name="TabHome1" component={fun} />
    <Tab.Screen options={() => ({
        tabBarIcon: () => {
            return (
                <View style={{ marginTop: -30 }}>

                    <AntDesign name="pluscircle"
                        size={50}
                        color="#e30b5e"
                        style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 8,
                            },
                            shadowOpacity: 0.46,
                            shadowRadius: 11.14,

                            elevation: 17,
                        }}
                    />
                </View>



            );
        }
    })} name="TabHome2" component={fun1} />
    <Tab.Screen options={() => ({
        tabBarIcon: () => {
            return (
                <Entypo name="v-card"

                    size={24}
                    color="#999999" />
            );
        }
    })} name="TabHome3" component={fun} />
    <Tab.Screen options={() => ({
        tabBarIcon: () => {
            return (

                <FontAwesome name="user"
                    size={24}
                    color="#999999" />
            );
        }
    })} name="TabHome4" component={fun} />

</Tab.Navigator>

const fun = () => {
    return <View>
        <Text>Hi</Text>
    </View>
}
const fun1 = () => {
    return <View>
        <Text>Hi1</Text>
    </View>
}