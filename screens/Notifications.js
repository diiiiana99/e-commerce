import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions,FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');
import { RectButton } from '../components/Button';
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";


// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    "key": "3571572",
    "title": "1)Have a sneaker budget in place. ",
    "description": "Buying shoes is an expensive hobby. Before you jump right in, you should be certain that you can afford to start amassing a footwear collection.",
    "image": "https://cdn.shopify.com/s/files/1/0612/1085/3546/products/Untitleddesign_40f57645-fdd7-4ba5-bfc8-9cea8e731b32.png?v=1646222404"
  },
  {
    "key": "3571747",
    "title": "2)Start buying shoes regularly.",
    "description": "Snatch up as many eye-catching pairs of sneakers as you can.",
    "image": "https://cdn.shopify.com/s/files/1/0612/1085/3546/products/Untitleddesign_2.png?v=1646222421"
  },
  {
    "key": "3571680",
    "title": "3)Decide on a favorite brand or style.",
    "description": "After they’ve been collecting for a while, most sneakerheads develop a preference for a particular brand or type of shoe.",
    "image": "http://cdn.shopify.com/s/files/1/0497/0381/3282/products/PhotoRoom_20210711_224243_1200x1200.png?v=1626007522"
  },
  {
    "key": "3571603",
    "title": "4)Find out when new models are coming out. ",
    "description": "Pay attention to brand marketing to learn about new models that are in production and when they’ll be available for purchase",
    "image": "http://cdn.shopify.com/s/files/1/0548/6772/2479/collections/56D7BEC5-CC95-4C7C-B57D-054BA69E7308_1200x1200.png?v=1631993109"
  }
]
const Indicator = ({scrollX}) => {

    return (
    <View style={{position: "absolute", bottom:140, flexDirection: "row",}}>
        {DATA.map((_, index) => {
                const inputRange = [(index - 1) * width, index * width, (index +1) * width];
                const scale = scrollX.interpolate({
                    inputRange ,
                    outputRange: [0.8, 1.4, 0.8]
                })
            return (
            <Animated.View 
            key={`indicator-${index}`}
            style={{
                height:10,
                width:10,
                borderRadius:5,
                backgroundColor:'#fff',
                margin:10,
                transform: [
                    { 
                    scale
                },
            ],
            }}>

            </Animated.View>
        )
        })}
    </View>
    )}
const Backdrop = ({scrollX}) => {
    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, index) => index *width),
        outputRange: bgs.map((bg) => bg)
    })
    return (
        <Animated.View
            style={[StyleSheet.absoluteFillObject,
          
            {
                backgroundColor
            }
        ]}
/>
    )
}
const Square = ({scrollX}) => {
    const YOLO = Animated.modulo(
        Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)), 
        1
)
  const rotate = YOLO.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['35deg', '0deg', '35deg']

  })
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0]

})
    return (
        <Animated.View
            style={{
                width: height,
                height: height,
                backgroundColor:'#fff',
                borderRadius: 86,
                position:'absolute',
                top: -height * 0.6,
                left: -height * 0.3,
                transform: [
                    { 
                        rotate,
                    },
                    { 
                        translateX
                    }

                ]

            }}

        />

       
    )
}
export default function App() {
    const {width , height} = Dimensions.get('screen');
    const scrollX= React.useRef(new Animated.Value(0)).current
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX}/>
      <Square scrollX={scrollX}/>
     <Animated.FlatList
     data={DATA}
     keyExtractor={(item) => item.key}
     horizontal
     scrollEventThrottle={32}
     onScroll={Animated.event(
         [{nativeEvent: {contentOffset: {x:scrollX}}}],
         {useNativeDriver:false}
     )}
     contentContainerStyle={{paddingBottom:100}}
     showsHorizontalScrollIndicator={false}
     pagingEnabled
     renderItem={({item}) => {
         return(
         <View style={{width,alignItems: 'center', padding:20 }}>
             <View style={{flex:0.7, justifyContent:'center'}}>
             <Image 
             source={{uri: item.image}} 
             style={{
                width: width / 1, 
                height: width/1.2 , 
                resizeMode:"contain"
            }}
            />
            </View>
            <View style={{flex: 0.3, }}>
                <Text style={{ color: 'black', fontWeight:'800', fontSize:26, marginBottom:10}}>{item.title}</Text>
                <Text style={{ color: 'black', fontWeight:'300', fontSize:16}}>{item.description}</Text>
            </View>
         </View>
         )
     }}
     />
     <Indicator scrollX={scrollX}>

     </Indicator>
     <TouchableOpacity
      style={{
        backgroundColor: '#001F2D',
        padding: 15,
        borderRadius: 20,
        // padding: SIZES.small,
        // borderRadius: SIZES.extraLarge,
        minWidth: 120,
        bottom: 2,
        right: 110
        // ...props,
      }}
    //   onPress={handlePress}
    >
      <Text
        style={{
        //   fontSize: fontSize,
          color: 'white',
          textAlign: "center",
          
        }}
      >
       Login
      </Text>
      
    
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        backgroundColor: '#001F2D',
        padding: 15,
        borderRadius: 20,
        // padding: SIZES.small,
        // borderRadius: SIZES.extraLarge,
        minWidth: 120,
        bottom: 50,
        left: 110
        // ...props,
      }}
    //   onPress={handlePress}
    >
      <Text
        style={{
        //   fontSize: fontSize,
          color: 'white',
          textAlign: "center",
          
        }}
      >
        Sign Up
      </Text>
      
    
    </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

