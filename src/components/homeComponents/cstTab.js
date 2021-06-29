import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, Text,View,TouchableOpacity,StyleSheet } from 'react-native';import { FontAwesome5 } from '@expo/vector-icons';
export default () => {
const [activeTab,setActiveTab]=useState("1")
    return <View style={style.container}>
        <TouchableOpacity onPress={()=>setActiveTab(1)} style={style.child}><Entypo name="tablet-mobile-combo" size={24} color="black" style={activeTab==1?style.active:style.color} /><Text style={activeTab==1?style.active:style.color}>Seller</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>setActiveTab(2)} style={style.child}><AntDesign name="android1" size={24} color="black" style={activeTab==2?style.active:style.color} /><Text style={activeTab==2?style.active:style.color}>Brands</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>setActiveTab(3)} style={style.child}><Entypo name="shop" size={24} color="black" style={activeTab==3?style.active:style.color} /><Text style={activeTab==3?style.active:style.color}>Market</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>setActiveTab(4)} style={style.child}><FontAwesome5 name="headphones-alt" size={24} color="black" style={activeTab==4?style.active:style.color} /><Text style={activeTab==4?style.active:style.color}>Accessories</Text></TouchableOpacity>


        
        

    </View>
}

const style=StyleSheet.create({
container:{
    flexDirection:'row',
    paddingTop:15,
    paddingBottom:15,    

    justifyContent:'space-around',
    marginRight:'5%'
},
child:{flex: 1,justifyContent:'center',alignItems:'center'},
color:{color:'#777777',fontFamily:'Ubuntu_400Regular'},
active:{
    color:'#bf0607',
    fontFamily:'Ubuntu_500Medium'
}
});