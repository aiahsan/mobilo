import React from 'react';
import { StyleSheet, View, Text,Dimensions,Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-x2-carousel';
import {Card} from 'react-native-paper'
const width=Dimensions.get('screen').width;
const DATA = [
    {id:1, src: 'https://s3b.cashify.in/gpro/uploads/2020/05/29094455/Infinix-Hot-9-Pro-header1.jpg' },
    { id:2,src: 'https://pk.xpark.com/pub/media/catalog/category/Category-Banner-1440x550-3.png' },
    {id:3, src: 'https://consumer-img.huawei.com/content/dam/huawei-cbg-site/me-africa/mu/mkt/pdp/phones/nova3i/img/nova3i_herobanner_pc.jpg' },
  ];    
export default ()=>{
    const renderItem = data => (
        <View key={data.id} style={styles.item}>
            <Image   style={{ width: '100%', height: '100%' }} resizeMode="cover"
 source={{ uri: data.src }}/>
        </View>
      );
    return (
        <Card>
        <View style={styles.container}>
          <Carousel
            pagination={Pagination}
            renderItem={renderItem}
            data={DATA}
          />
        </View>
        </Card>
      );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        width:width,
    height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#dbf3fa',

    },
  });