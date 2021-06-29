import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
import { FontAwesome5,Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();

    return <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginTop: 10, paddingRight: '10%' }}>
            <View ><Ionicons name="ios-menu" size={30} color="#ffffff" /></View>

        </TouchableOpacity>
        <View  >
            <View style={styles.buttonCent}><Image source={require('../../images/logo.png')} style={{width:70,height:25}} resizeMode="stretch" /></View>
        </View>
        <View >
            <View style={styles.buttonCent}><Text style={{ color: 'white' }}></Text></View>
        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //alignContent:'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 60, marginLeft: '-5%'
    },
    buttonCenter: { alignItems: 'center', flexDirection: 'row' },
    buttonCent: { alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10,marginLeft:'15%' },
    oldNew: { paddingTop: 2, paddingLeft: 20, paddingRight: 20, paddingBottom: 2, marginRight: 5 },
    fontx: { color: '#cb0707', fontSize: 10 },
});

/*
<View style={styles.buttonCenter}>
                <TouchableOpacity><Card  style={styles.oldNew}><Text style={styles.fontx}>New</Text>
                <Text style={styles.fontx}>1000</Text>
                </Card>
                </TouchableOpacity>
                <TouchableOpacity>
                <Card  style={styles.oldNew}><Text style={styles.fontx}>Old</Text>

                <Text style={styles.fontx}>2000</Text>

                </Card>
                </TouchableOpacity>
            </View>

*/