import React from "react";
import { View, Text,StatusBar, Image, TextInput,ScrollView, StyleSheet} from "react-native";

import { COLORS, FONTS, SIZES, assets } from "../constants";


const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        flex: 0,
        padding: SIZES.font,
      }}
    >
      <StatusBar hidden={true} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        <Image
          source=''
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />

        <View style={{ width: 45, height: 45,  }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font,bottom:10 }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: 22,
            fontWeight: '800',
            color: 'black',
          }}
        >
          Hello Via👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: 15,
            color: 'black',
            marginTop: SIZES.base / 1,
          }}
        >
       Shop our collection of sneakers!
        </Text>
      </View>
      <ScrollView>
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search Sneakers"
            style={{ flex: 1}}
            onChangeText={onSearch}
          />
        </View>
      </View>

      </ScrollView>

    </View>
  );
};

export default HomeHeader;
