import React from 'react';
import {View,Text, Image} from 'react-native';
import Header from '../components/navigations/header';
import TopBar from '../components/homeComponents/topbar';
import Carousel from '../components/homeComponents/carousel';
import BrandBar from '../components/homeComponents/brandBar';
import {Card,Title,Paragraph} from 'react-native-paper';
import Tab1 from '../components/homeComponents/cstTab'
import { ScrollView,StyleSheet } from 'react-native';
import MobileBoxes from '../components/mobiles/mobileBox'
export default ()=>{
    return <View>
<Header/>
<TopBar/>
<BrandBar/>
<ScrollView style={{marginBottom:150}}>
    
<Card>
<Carousel/>

    <MobileBoxes/>

</Card>

</ScrollView>
    </View>
}











