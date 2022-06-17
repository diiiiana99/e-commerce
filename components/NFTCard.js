// import React from "react";
// import { useNavigation } from "@react-navigation/native";
// import { View, Image,StatusBar, FlatList } from "react-native";

// import { COLORS, SIZES, SHADOWS, assets } from "../constants";
// import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
// import { RectButton, CircleButton } from "./Button";

// const NFTCard = ({ data }) => {
//   const navigation = useNavigation();

//   return (
//     <View
//       style={{
//         backgroundColor: 'white',
//         borderRadius: SIZES.font,
//         marginBottom: SIZES.extraLarge,
//         margin: SIZES.base,
//         ...SHADOWS.dark,
//       }}
//     >
//       <FlatList>
//       <View
//         style={{
//           width: "100%",
//           height: 250,
//           shadowColor: '#000',
//           shadowOffset: {
//             width: 0,
//             height: 20
//           },
//           shadowOpacity: 0.3,
//           shadowRadius: 10,
//         }}
//       >
//         <Image
//           source={data.image}
//           resizeMode="cover"
//           style={{
//             width: "100%",
//             height: "100%",
//             borderTopLeftRadius: SIZES.font,
//             borderTopRightRadius: SIZES.font,
//           }}
//         />

//         <CircleButton imgUrl={assets.heart} right={10} top={10} />
//       </View>

//       <SubInfo />

//       <View style={{ width: "100%", padding: SIZES.font }}>
//         <NFTTitle
//           title={data.name}
//           subTitle={data.creator}
//           titleSize={SIZES.large}
//           subTitleSize={SIZES.small}
//         />

//         <View
//           style={{
//             marginTop: SIZES.font,
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "center",
//             shadowColor: '#000',
//             shadowOffset: {
//               width: 0,
//               height: 10
//             },
//             shadowOpacity: 0.3,
//             shadowRadius: 20,
//           }}
//         >
//           <EthPrice price={data.price} />
//           <RectButton
//             minWidth={120}
//             fontSize={SIZES.font}
//             handlePress={() => navigation.navigate("Details", { data })}
//           />
//         </View>
//       </View>
//       </FlatList>
//     </View>
//   );
// };

// export default NFTCard;

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StatusBar } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: 'rgba(255,255,255,0.6)',
        flex: 1,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        shadowOffset: {
          width: 0,
          height: 10
        },
        shadowOpacity: 0.2,
        shadowRadius: 20
        
      }}
    >

      <View
        style={{
          width: "100%",
          height: 250,

        }}
      >

        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font,  }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
      <StatusBar hidden/>
    </View>
  );
};

export default NFTCard;