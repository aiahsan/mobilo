import React from 'react';
import Cardx from './mobileCard'
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Product } from '../../utiles/routes'
import MobileCard from './mobileCard'

export default ({handleProduct}) => {
    const navigation = useNavigation();
 return <>
         <Text style={{ fontFamily: 'Ubuntu_700Bold', marginLeft: '3%', fontSize: 18, color: '#383838' }}><FontAwesome5 name="sliders-h" size={18} color="#383838" /><Text>Latest Mobile</Text></Text>

  <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <View style={{ padding: 2, width: 170 }}>
                        <MobileCard img={require('../../images/1a.jpg')}  handleProduct={ handleProduct} />
                    </View>
                    <View style={{ padding: 2, width: 170 }}>
                        <MobileCard img={require('../../images/1b.jpg')} handleProduct={ handleProduct} />
                    </View>
                    <View style={{ padding: 2, width: 170 }}>
                        <MobileCard img={require('../../images/1c.jpg')} handleProduct={ handleProduct} />
                    </View>
                </ScrollView>
                <Text style={{ fontFamily: 'Ubuntu_700Bold', marginLeft: '3%', fontSize: 18, color: '#383838' }}><FontAwesome5 name="sliders-h" size={18} color="#383838" /><Text>Popular Mobile</Text></Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:10}} >
                  <View style={{ padding: 2, width: 170 }}>
                      <MobileCard handleProduct={ handleProduct} />
                  </View>
                  <View style={{ padding: 2, width: 170 }}>
                      <MobileCard handleProduct={ handleProduct} />
                  </View>
                  <View style={{ padding: 2, width: 170 }}>
                      <MobileCard handleProduct={ handleProduct} />
                  </View>
              </ScrollView>
              <Text style={{ fontFamily: 'Ubuntu_700Bold', marginLeft: '3%', fontSize: 18, color: '#383838',marginTop:10 }}><FontAwesome5 name="sliders-h" size={18} color="#383838" /><Text>Trend Mobile</Text></Text>

              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:10}} >
    <View style={{ padding: 2, width: 170 }}>
        <MobileCard handleProduct={ handleProduct} />
    </View>
    <View style={{ padding: 2, width: 170 }}>
        <MobileCard handleProduct={ handleProduct} />
    </View>
    <View style={{ padding: 2, width: 170 }}>
        <MobileCard handleProduct={ handleProduct} />
    </View>
</ScrollView>
              
              
 </>
}
    /*
 return <View style={{}}>
        <Text style={{ fontFamily: 'Ubuntu_700Bold', marginLeft: '3%', fontSize: 18, color: '#d10607' }}><FontAwesome5 name="sliders-h" size={18} color="#d90706" /><Text>Latest Mobile</Text></Text>
        <View style={styles.container}>
            <View style={styles.box}>

                <TouchableOpacity onPress={() => handleProduct()}>
                    <Cardx />
                </TouchableOpacity>

            </View>
            <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate(Product)}>
                    <Cardx />
                </TouchableOpacity>

            </View>
        </View>


    </View>
}

*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 20,
    },
    box: {
        flexBasis: 165,
        borderRadius:15,
        height: 200,
        margin: 6,
    }
});