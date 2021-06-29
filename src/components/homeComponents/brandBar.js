import React, { useState } from 'react';
import { ScrollView, Text,View,TouchableOpacity } from 'react-native'
export default () => {

    const [brands, setbrands] = useState([{ id: 1, brand: 'Samsung' }, { id: 2, brand: 'LG' }, { id: 3, brand: 'QMobile' }, { id: 4, brand: 'Motorola' }, { id: 5, brand: 'Nokia' }, { id: 6, brand: 'Huawei' }, { id: 7, brand: 'HTC' }, { id: 8, brand: 'Oppo' }, { id: 9, brand: 'Sony'}, { id: 10, brand: 'Vivo'}, { id: 11, brand: 'Apple'}, { id: 12, brand: 'Inffinix'}]);
    return <View>
    <ScrollView         horizontal={true}
>
{brands.map(x=><TouchableOpacity key={x.id} style={{padding:10}}><Text style={{fontFamily:'Ubuntu_500Medium',color:'#545454'}}>{x.brand}</Text></TouchableOpacity>)}
    </ScrollView>
    </View>
}