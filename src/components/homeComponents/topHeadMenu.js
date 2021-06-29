import React, { useState } from 'react';
import { View, TouchableOpacity, ImageBackground, Text, StyleSheet } from 'react-native'
import Header from '../navigations/header';
import { Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Card,Searchbar } from 'react-native-paper';

import { AntDesign } from '@expo/vector-icons';

export default () => {
    const [active, setActive] = useState(0);

    return (<>
        <ImageBackground source={require('../../images/2174912.jpg')} style={{ width: '100%', height: 170 }} >
            <View style={{ marginTop: 10 }}>
                <Header />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity style={(active == 0 ? styles.ActivebackButton : styles.Button)} onPress={() => setActive(0)} >
                        <Text style={(active == 0 ? styles.ActiveTextStl : styles.ActiveTextStl1)}>New</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(active == 0 ? styles.ActiveTextStl : styles.ActiveTextStl1)}>1000</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={(active == 0 ? styles.Button : styles.ActivebackButton)} onPress={() => setActive(1)} >
                        <Text style={(active == 0 ? styles.ActiveTextStl1 : styles.ActiveTextStl)}>Old</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={(active == 0 ? styles.ActiveTextStl1 : styles.ActiveTextStl)}>1000</Text>

                    </TouchableOpacity>
                </View>
                <Card style={{ padding: 10,marginTop:10 ,marginLeft:'6%',marginRight:'6%'}}>
                    <View style={{ flexDirection: 'row' }}>
                        <View >
                            <Text style={{ color: '#0592e4' }}>Pakistan</Text>

                        </View>
                        <View style={{ backgroundColor: '#0592e4', borderRadius: 20, width: 20, height: 20, marginLeft: 10 }}>
                            <AntDesign name="right" size={14} color="black" style={{ marginTop: 2, marginLeft: 4, color: 'white' }} />
                        </View>
                        <View style={{ backgroundColor: '#e6e6e6', width: 2, height: 20, marginLeft: 10 }}>

                        </View>
                        <Searchbar
                            placeholder="Search"
                            style={{width:'70%',height:20,elevation: 0,shadowOpacity: 0,       flexDirection:'row-reverse'                 }}
                          
                        />
                    </View>
                </Card>
            </View>
        </ImageBackground>

    </>);
}
const styles = StyleSheet.create({
    ActivebackButton: { backgroundColor: '#ed1b24ab', padding: 5, paddingLeft: 20, paddingRight: 20, width: 80 },
    Button: { backgroundColor: 'white', padding: 5, paddingLeft: 20, paddingRight: 20, width: 80 },
    ActiveTextStl: { color: 'white', fontSize: 12, fontFamily: 'Ubuntu_400Regular', textAlign: 'center', width: '100%' },
    ActiveTextStl1: { color: 'black', fontSize: 12, fontFamily: 'Ubuntu_400Regular', textAlign: 'center', width: '100%' },
})

