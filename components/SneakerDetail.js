import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { SharedElement } from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';

const DURATION = 400
const DELAY = 400

const fadeInBottom = {
    0: {
        opacity: 0,
        translateY: 100
    },
    1: {
        opacity: 1,
        translateY: 0
    }
}
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function SneakerDetail({navigation, route}) {

    const { item } = route.params
  return (
     <View style={{flex: 1}}>
        <SharedElement 
        id={`item.${item.key}.image`}
        style={[StyleSheet.absoluteFillObject]}>

         <Image
            source={{uri: item.poster}}
            style={[StyleSheet.absoluteFillObject]}

            />
             
         </SharedElement>
            <View
            style={[StyleSheet.absoluteFillObject,
            {backgroundColor:'#000', opacity: 0.5}]}></View>
        <AntDesign
        name='close'
        size={28}
        style={{
            padding: 40,
            position: 'absolute',
            top: 20,
            padding: 5,
            right: 10,
            borderRadius: 16
        }}
        color={'#fff'}
        onPress={() => {
            navigation.goBack()
        }}/>
         <SharedElement 
         id='general.bg'
          style={[StyleSheet.absoluteFillObject,
          {
              transform: [{translateY: deviceHeight /.94}]
          }
          ]}
          >
        <ScrollView style={[
            StyleSheet.absoluteFillObject,
        {
            backgroundColor:'#fff',
            transform: [{translateY: -deviceHeight * .4}],
            padding: 15,
            borderRadius: 16
        }]}>
            <Animatable.Text 
            animation={fadeInBottom}  
            duration={DURATION}
            delay={DELAY + 200}
            style={{
                fontWeight: '900', 
                fontSize: 22,
                paddingBottom: 5
                }}>
            {item.title}
            </Animatable.Text>
            <Animatable.Text 
            animation={fadeInBottom} 
            duration={DURATION}
            delay={DELAY + 350} 
            style={{
                fontWeight: '500', 
                fontSize: 16,
                paddingBottom: 5
            }}>
            {item.location}
            </Animatable.Text>
  <Animatable.Text 
            animation={fadeInBottom} 
            duration={DURATION}
            delay={DELAY + 500} 
            style={{
                fontSize: 12,
                paddingBottom: 5
            }}>
            {item.date}
            </Animatable.Text>
            <Animatable.Text 
            animation={fadeInBottom} 
            duration={DURATION}
            delay={DELAY + 500} 
            style={{
                fontSize: 12,
                paddingBottom: 5
            }}>
            {item.description}
            </Animatable.Text>
        </ScrollView>
        </SharedElement>
     </View>
  );
};

SneakerDetail.sharedElements = route => {
    const { item } = route.params;
    return [
      {
        id: `item.${item.id}.image`,
    
      }
    ];
  };
