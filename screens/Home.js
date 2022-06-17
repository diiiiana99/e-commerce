import React, { useState } from "react";
import { View, SafeAreaView, FlatList,Image,StyleSheet,Animated,StatusBar } from "react-native";

import { NFTCard, HomeHeader } from "../components";
import {  NFTData } from "../constants";

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };

  return (
    <SafeAreaView  style={{ flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',}}>
          <StatusBar hidden={true} />

      <View style={{ flex: 1}}>
        <View style={{ zIndex: 0 }}>
          <Animated.FlatList
            data={nftData}
            renderItem={({ item,index }) =>     
            <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
            backgroundColor:bgs[1]
          }}
        >
          
          <View
            style={{ height: 300, backgroundColor:bgs[1] }} />
           {/* <Image
            source={{uri: BG_IMG}}
            style={StyleSheet.absoluteFillObject}
            blurRadius={50}
            /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
