import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import StarRating from 'react-native-star-rating';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import { Ionicons, FontAwesome5, Entypo, Zocial } from '@expo/vector-icons';
import MobileCard from './mobileCard'
export default class App extends Component {
    render() {
        return (
            <View style={{ paddingBottom: 10 }}>
                <View style={styles.container}>
                    <View style={{ ...styles.box, marginLeft: 10 }} >
                        <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={{ uri: 'https://www.pakmobizone.pk/wp-content/uploads/2019/03/Samsung-Galaxy-A50.png' }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                            <TouchableOpacity>
                                <View style={{ width: 50, height: 50, margin: 2 }}>
                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={{ uri: 'https://www.pakmobizone.pk/wp-content/uploads/2019/03/Samsung-Galaxy-A50.png' }} />

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ width: 50, height: 50, margin: 2 }}>
                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={{ uri: 'https://www.pakmobizone.pk/wp-content/uploads/2019/03/Samsung-Galaxy-A50.png' }} />

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ width: 50, height: 50, margin: 2 }}>
                                    <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={{ uri: 'https://www.pakmobizone.pk/wp-content/uploads/2019/03/Samsung-Galaxy-A50.png' }} />

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ ...styles.box1, marginLeft: 10 }}>
                        <Text style={styles.label}>Samsung</Text>
                        <Text style={styles.label1}>Galaxy Note 20 Ultra</Text>
                        <Text style={styles.label1}>5G 128GB</Text>
                        <Text style={styles.label1}>Mystic Bronze (Verizon)</Text>
                        <Text style={styles.label1}>Model:SM-6422215</Text>
                        <Text style={styles.label1}>Rating 4.7 out of 5</Text>
                        <Text style={styles.label1}>119 reviews</Text>

                        <StarRating
                            containerStyle={{ marginTop: 10, maxWidth: 120 }}
                            disabled={false}
                            maxStars={5}
                            rating={3.5}
                            fullStarColor={'#f1b314'}
                            starSize={20}
                        />
                        <View style={{ flexDirection: 'row', marginLeft: -10 }} >
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#538a36', width: 20, height: 20, margin: 10 }}></View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#efa528', width: 20, height: 20, margin: 10 }}></View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#e76420', width: 20, height: 20, margin: 10 }}></View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#be2a28', width: 20, height: 20, margin: 10 }}></View>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.label2}>free shipping all <Text style={{ color: '#3ca641' }}>Pakistan</Text></Text>
                        <View style={{ flexDirection: 'row', marginLeft: -10, flexWrap: 'wrap', justifyContent: 'center' }} >
                            <TouchableOpacity>
                                <Card style={{ margin: 5, padding: 5, fontFamily: "Ubuntu_400Regular", backgroundColor: '#a10509' }}><Ionicons name="ios-call" size={24} color="white" /></Card>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Card style={{ margin: 5, padding: 5, fontFamily: "Ubuntu_400Regular", backgroundColor: '#a10509' }}><Entypo name="chat" size={24} color="white" /></Card>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Card style={{ margin: 5, padding: 3, fontFamily: "Ubuntu_400Regular", backgroundColor: '#a10509' }}><Zocial name="email" size={24} color="white" /></Card>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style={{ fontFamily: 'Ubuntu_700Bold', marginLeft: '3%', fontSize: 18, color: '#383838',marginTop:'7%' }}><FontAwesome5 name="sliders-h" size={18} color="#383838" /><Text>Popular Mobile</Text></Text>
                <ScrollView horizontal  showsHorizontalScrollIndicator={false} >
                    <View style={{ padding: 2, width: 170 }}>
                        <MobileCard />

                    </View>
                    <View style={{ padding: 2, width: 170 }}>
                        <MobileCard />
                    </View>
                    <View style={{ padding: 2, width: 170 }}>
                        <MobileCard />
                    </View>
                </ScrollView>

                <Text style={{ fontFamily: 'Ubuntu_700Bold', marginLeft: '3%', fontSize: 18, color: '#383838',marginTop:10 }}><FontAwesome5 name="sliders-h" size={18} color="#383838" /><Text>Trend Mobile</Text></Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <View style={{ padding: 2, width: 170 }}>
                        <MobileCard />
                    </View>
                    <View style={{ padding: 2, width: 170 }}>
                        <MobileCard />
                    </View>
                    <View style={{ padding: 2, width: 170 }}>
                        <MobileCard />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 20,
    },
    containerBox: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 20,
    },
    box: {
        flexBasis: 140,
        height: 210,
        margin: 6,
    },
    box1: {
        flexBasis: 170,
        height: '100%',
        margin: 6,
    },
    label: {
        fontFamily: "Ubuntu_500Medium",
        fontSize: 22,


    },
    label1: {
        fontFamily: "Ubuntu_400Regular",
        fontSize: 16,
    }
    ,
    label2: {
        fontFamily: "Ubuntu_400Regular",
        fontSize: 14,
    }
});
