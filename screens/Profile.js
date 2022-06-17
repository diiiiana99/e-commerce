import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { EvilIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { assets  } from "../constants";

const Profile = () => {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
             source={assets.person01}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>Mike Law</Title>
            <Caption style={styles.caption}>@mike_law</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
        <EvilIcons name='location' size={16} color='blue' style={{ marginRight: 5 }}
                  />
             <Text style={{color:"#777777", marginLeft: 20}}>New York,NY</Text>
        </View>
        <View style={styles.row}>
        <Ionicons name='call-outline' size={16} color='blue' style={{ marginRight: 5 }}/>
        <Text style={{color:"#777777", marginLeft: 20}}>+(917)873-8511</Text>
        </View>
        <View style={styles.row}>
        <Ionicons name='mail-outline' size={16} color='blue' style={{ marginRight: 5 }}/>
        <Text style={{color:"#777777", marginLeft: 20}}>mike_law@gmail.com</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>$140.50</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>2</Title>
            <Caption>Orders</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Ionicons name='heart-outline' size={19} color='blue' style={{ marginRight: 0 }}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Ionicons name='card-outline' size={19} color='blue' style={{ marginRight: 0 }}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple >
          <View style={styles.menuItem}>
          <Ionicons name='share-outline' size={19} color='blue' style={{ marginRight: 0 }}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
          <Ionicons name='share-outline' size={19} color='blue' style={{ marginRight: 0 }}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
           <Ionicons name="settings-outline" color="blue" size={19}/>
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

// import React from 'react';
// import {
//   Image,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Dimensions
// } from 'react-native';

// import data from '../data/data';
// import Swiper from 'react-native-deck-swiper';
// import { Transitioning, Transition } from 'react-native-reanimated';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// const { width } = Dimensions.get('window');

// const stackSize = 4;
// const colors = {
//   red: '#EC2379',
//   blue: '#0070FF',
//   gray: '#777777',
//   white: '#ffffff',
//   black: '#000000'
// };
// const ANIMATION_DURATION = 200;

// const transition = (
//   <Transition.Sequence>
//     <Transition.Out
//       type='slide-bottom'
//       durationMs={ANIMATION_DURATION}
//       interpolation='easeIn'
//     />
//     <Transition.Together>
//       <Transition.In
//         type='fade'
//         durationMs={ANIMATION_DURATION}
//         delayMs={ANIMATION_DURATION / 2}
//       />
//       <Transition.In
//         type='slide-bottom'
//         durationMs={ANIMATION_DURATION}
//         delayMs={ANIMATION_DURATION / 2}
//         interpolation='easeOut'
//       />
//     </Transition.Together>
//   </Transition.Sequence>
// );

// const swiperRef = React.createRef();
// const transitionRef = React.createRef();

// const Card = ({ card }) => {
//   return (
//     <View style={styles.card}>
//       <Image source={{ uri: card.image }} style={styles.cardImage} />
//     </View>
//   );
// };

// const CardDetails = ({ index }) => (
//   <View key={data[index].id} style={{ alignItems: 'center' }}>
//     <Text style={[styles.text, styles.heading]} numberOfLines={2}>
//       {data[index].name}
//     </Text>
//     <Text style={[styles.text, styles.price]}>{data[index].price}</Text>
//   </View>
// );

// export default function Profile() {
//   const [index, setIndex] = React.useState(0);
//   const onSwiped = () => {
//     transitionRef.current.animateNextTransition();
//     setIndex((index + 1) % data.length);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <MaterialCommunityIcons
//         name='crop-square'
//         size={width}
//         color={colors.blue}
//         style={{
//           opacity: 0.05,
//           transform: [{ rotate: '45deg' }, { scale: 1.6 }],
//           position: 'absolute',
//           left: -15,
//           top: 30
//         }}
//       />
//       <StatusBar hidden={true} />
//       <View style={styles.swiperContainer}>
//         <Swiper
//           ref={swiperRef}
//           cards={data}
//           cardIndex={index}
//           renderCard={card => <Card card={card} />}
//           infinite
//           backgroundColor={'transparent'}
//           onSwiped={onSwiped}
//           onTapCard={() => swiperRef.current.swipeLeft()}
//           cardVerticalMargin={50}
//           stackSize={stackSize}
//           stackScale={10}
//           stackSeparation={14}
//           animateOverlayLabelsOpacity
//           animateCardOpacity
//           disableTopSwipe
//           disableBottomSwipe
//           overlayLabels={{
//             left: {
//               title: 'NOPE',
//               style: {
//                 label: {
//                   backgroundColor: colors.red,
//                   borderColor: colors.red,
//                   color: colors.white,
//                   borderWidth: 1,
//                   fontSize: 24
//                 },
//                 wrapper: {
//                   flexDirection: 'column',
//                   alignItems: 'flex-end',
//                   justifyContent: 'flex-start',
//                   marginTop: 20,
//                   marginLeft: -20
//                 }
//               }
//             },
//             right: {
//               title: 'LIKE',
//               style: {
//                 label: {
//                   backgroundColor: colors.blue,
//                   borderColor: colors.blue,
//                   color: colors.white,
//                   borderWidth: 1,
//                   fontSize: 24
//                 },
//                 wrapper: {
//                   flexDirection: 'column',
//                   alignItems: 'flex-start',
//                   justifyContent: 'flex-start',
//                   marginTop: 20,
//                   marginLeft: 20
//                 }
//               }
//             }
//           }}
//         />
//       </View>
//       <View style={styles.bottomContainer}>
//         <Transitioning.View
//           ref={transitionRef}
//           transition={transition}
//           style={styles.bottomContainerMeta}
//         >
//           <CardDetails index={index} />
//         </Transitioning.View>
//         <View style={styles.bottomContainerButtons}>
//           <MaterialCommunityIcons.Button
//             name='close'
//             size={94}
//             backgroundColor='transparent'
//             underlayColor='transparent'
//             activeOpacity={0.3}
//             color={colors.red}
//             onPress={() => swiperRef.current.swipeLeft()}
//           />
//           <MaterialCommunityIcons.Button
//             name='circle-outline'
//             size={94}
//             backgroundColor='transparent'
//             underlayColor='transparent'
//             activeOpacity={0.3}
//             color={colors.blue}
//             onPress={() => swiperRef.current.swipeRight()}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.white
//   },
//   swiperContainer: {
//     flex: 0.55
//   },
//   bottomContainer: {
//     flex: 0.45,
//     justifyContent: 'space-evenly'
//   },
//   bottomContainerMeta: { alignContent: 'flex-end', alignItems: 'center' },
//   bottomContainerButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly'
//   },
//   cardImage: {
//     width: 160,
//     flex: 1,
//     resizeMode: 'contain'
//   },
//   card: {
//     flex: 0.45,
//     borderRadius: 8,
//     shadowRadius: 25,
//     shadowColor: colors.black,
//     shadowOpacity: 0.08,
//     shadowOffset: { width: 0, height: 0 },
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: colors.white
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: 50,
//     backgroundColor: 'transparent'
//   },
//   done: {
//     textAlign: 'center',
//     fontSize: 30,
//     color: colors.white,
//     backgroundColor: 'transparent'
//   },
//   text: { fontFamily: 'Courier' },
//   heading: { fontSize: 24, marginBottom: 10, color: colors.gray },
//   price: { color: colors.blue, fontSize: 32, fontWeight: '500' }
// });