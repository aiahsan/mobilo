import * as React from 'react';
import { Text } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = ({handleProduct,img}) => (
  <TouchableOpacity onPress={()=>{
    if(handleProduct)
    handleProduct();
  }}>
    <Card style={{ backgroundColor: '#f3f2f2' }}>
      <Card.Content>
        <Title style={{ color: '#6f6f6f', fontFamily: 'Ubuntu_500Medium' }}>Samsung</Title>
        <Paragraph style={{ marginTop: -5,color:'#6f6f6f' }}>Galaxy S10</Paragraph>
      </Card.Content>
      {
        (img?<Card.Cover style={{ height: 90 }} source={img}  />:<Card.Cover style={{ height: 90 }} source={{ uri: 'https://cdn.vox-cdn.com/thumbor/JomlIwzkT9pxfOCzHoicQO-kP0s=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13975971/jbareham_190213_3183_0081_S10_s10_.jpg' }} />
        )
      }
      <Card.Actions>
        <Text style={{ fontFamily: 'Ubuntu_400Regular' }}>Price: 100000</Text>

      </Card.Actions>
      <Card.Actions style={{ marginTop: -15 }}>
        <Text style={{ fontFamily: 'Ubuntu_400Regular' }}>Condition: New</Text>

      </Card.Actions>
    </Card>
  </TouchableOpacity>
);

export default MyComponent;