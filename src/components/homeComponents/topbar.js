import React, { useState } from 'react';
import { View, Picker, StyleSheet,Platform } from "react-native";
import { Sae, Kohana, Makiko } from 'react-native-textinput-effects';
import { FontAwesome } from '@expo/vector-icons';
import { Searchbar, Card,TextInput} from 'react-native-paper';


export default () => {
    const [selectedValue, setSelectedValue] = useState("a");
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);
    return (
        <Card>
       <View style={styles.container}>
            <View style={styles.child} >
               
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: Platform.OS === 'ios'?40:30,marginTop:Platform.OS === 'ios'?0:10}}
                        
                        itemStyle={{    height: Platform.OS === 'ios'?40:40
                        ,marginTop:Platform.OS === 'ios'?6:0
                        }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Pakistan" value="Pakistan" />
                        <Picker.Item label="Karachi" value="Karachi" />
                    </Picker>
            </View>
            <View style={styles.child}>
        <TextInput mode="flat" placeholder="search" underlineColor="white" style={{backgroundColor:'white',height:50,fontFamily:'Ubuntu_400Regular'}}/>




























            </View>

        </View>
        </Card>

    );


}

const styles = StyleSheet.create({
    container: {


        justifyContent: 'center'
        , flexDirection: 'row'

    },
    child: {
        flex: 1

    }

});