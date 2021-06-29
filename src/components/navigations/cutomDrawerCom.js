import React from 'react';
import { createDrawerNavigator  ,  DrawerContentScrollView , DrawerItemList} from '@react-navigation/drawer';
import { Button, View, Text , Image,TouchableOpacity } from 'react-native';
import { AntDesign , Feather, MaterialCommunityIcons ,Ionicons, MaterialIcons , EvilIcons , Entypo,Foundation,FontAwesome5} from '@expo/vector-icons'; 

export default ()=>{
    const Name = 'Ahmed';
    const Email = 'ahmed123@mail.com'
    return(
      <>
     
        <View style={{   flex:0.5  , flexDirection:'column',backgroundColor:'#ea4b4d',paddingLeft:'5%' }}>
        <Image style={{ width:50 , height:50  , borderRadius:50 , marginTop:'30%'}} />
           <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Voice of Superstar</Text>
           <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Current Starts Status</Text>
  
          
        </View>
       
      
      
      
  
      <DrawerContentScrollView style={{}} >
       <Text style={{fontWeight:'bold',fontSize:16,marginBottom:30,paddingLeft:'5%',paddingRight:'3%'}}>Live</Text>
       <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
       <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
        <View style={{flex:.2}}>
        <Feather name="grid" size={24} color="black" />
        </View>
        <View style={{flex:1}}>
      <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Dashboard</Text>
        </View>
       </View>
       </TouchableOpacity>
  
       <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
       <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
        <View style={{flex:.2}}>
        <Feather name="list" size={24} color="black" />
        </View>
        <View style={{flex:1}}>
      <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>List</Text>
        </View>
       </View>
       </TouchableOpacity >
  
       <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
       <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
        <View style={{flex:.2}}>
        <Foundation name="graph-bar" size={24} color="black" />
        </View>
        <View style={{flex:1}}>
      <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Graphs</Text>
        </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
       <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
        <View style={{flex:.2}}>
        <FontAwesome5 name="map-marked-alt"  size={24} color="black" />
        </View>
        <View style={{flex:1}}>
      <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Google Map</Text>
        </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
       <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
        <View style={{flex:.2}}>
        <Feather name="check-square" size={24} color="black" />
        </View>
        <View style={{flex:1}}>
      <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Toady's Votes</Text>
        </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity style={{borderWidth:1,paddingLeft:'5%',paddingRight:'3%',paddingTop:'5%',borderLeftColor:'white',borderRightColor:'white',borderColor:'#cecece'}}>
       <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
        <View style={{flex:.2}}>
        <MaterialIcons name="fingerprint" size={24} color="black" />
        </View>
        <View style={{flex:1}}>
      <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Cast Your Vote</Text>
        </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%',marginTop:'6%'}}>
       <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
        <View style={{flex:.2}}>
        <MaterialIcons name="share" size={24} color="black" />
        </View>
        <View style={{flex:1}}>
      <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Share</Text>
        </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
       <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
        <View style={{flex:.2}}>
        <Ionicons name="md-star" size={24} color="black" />
        </View>
        <View style={{flex:1}}>
      <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Rate Us</Text>
        </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
       <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
        <View style={{flex:.2}}>
        <Entypo name="v-card" size={24} color="black" />
        </View>
        <View style={{flex:1}}>
      <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Contact Us</Text>
        </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
       <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
        <View style={{flex:.2}}>
        <MaterialIcons name="live-help" size={24} color="black" />
        </View>
        <View style={{flex:1}}>
      <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Help</Text>
        </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
       <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
        <View style={{flex:.2}}>
        <Foundation name="page-copy" size={24} color="black" />
        </View>
        <View style={{flex:1}}>
      <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Privacy Policy</Text>
        </View>
       </View>
       </TouchableOpacity>
       <TouchableOpacity style={{paddingLeft:'5%',paddingRight:'3%'}}>
       <View style={{height:50,flexDirection:'row',flex:1,justifyContent:'center'}}>
        <View style={{flex:.2}}>
        <Entypo name="newsletter" size={24} color="black" />
        </View>
        <View style={{flex:1}}>
      <Text style={{textAlign:'left',marginTop:5,marginLeft:10,fontWeight:'bold'}}>Terms And Conditions</Text>
        </View>
       </View>
       </TouchableOpacity>
      </DrawerContentScrollView>
  
      </>
      
      
    );
  }