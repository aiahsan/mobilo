import React,{useState,useEffect} from 'react';
import {View,Text, BackHandler,Alert} from 'react-native';
import Header from '../components/navigations/header';
import TopBar from '../components/homeComponents/topbar';
import Carousel from '../components/homeComponents/carousel';
import BrandBar from '../components/homeComponents/brandBar';
import {Card} from 'react-native-paper';
import Tab1 from '../components/homeComponents/cstTab'
import { ScrollView } from 'react-native';
import ProductBoxes from '../components/mobiles/mobileContainer'
import { Product } from '../utiles/routes';
import ProductMain from '../components/mobiles/mobileBox';
import TopHeader from '../components/homeComponents/topHeadMenu'
export default ()=>{
    const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };
    
      useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () => {
          BackHandler.removeEventListener("hardwareBackPress", backAction);
        };
      }, []);
    const [handleProduct,sethandleProduct]=useState(false);
    const [handleScreenStack,setHandleScreenStack]=useState([]);
    return <View style={{backgroundColor:'#fafafa'}}>
<TopHeader/>
<BrandBar/>

<ScrollView style={{marginBottom:'44%'}}>
    
<Card>
<Carousel/>
<Tab1/>
{
    (handleProduct==false?<ProductBoxes handleProduct={sethandleProduct}/>:<ProductMain/>)
}

</Card>
</ScrollView>
    </View>
}



