import React from "react";

import { Image, Text } from "react-native";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Feed from "../screens/Feed";
import Find from "../screens/Find";
import Plus from "../screens/Plus";
import MessageBox from "../screens/MessageBox";
import Profile from "../screens/Profile";

import message from "../../assets/windowscomments-grey.png";
import userProfile from "../../assets/userProfile.png";
import search from "../../assets/search-grey.png";
import plusTikTokWhite from "../../assets/plusTikTok-white.png";
import home from "../../assets/home.png";

const Routes = createBottomTabNavigator(
  {
    Inicio: Feed,
    Descobrir: Find,
    Plus: {
      screen: Plus,
      navigationOptions: {}
    },
    "Caixa de Entrada": MessageBox,
    Eu: Profile
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "grey",
      showLabel: false,
      style: {
        backgroundColor: "black",
        height: 57,
        borderTopColor: "grey",
        borderTopWidth: 0.19,
        paddingVertical: 7
      }
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = FontAwesome5;
        let IconName;

        if (routeName === "Inicio") IconName = home;
        else if (routeName === "Descobrir") IconName = search;
        else if (routeName === "Plus") IconName = plusTikTokWhite;
        else if (routeName === "Caixa de Entrada") IconName = message;
        else if (routeName === "Eu") IconName = userProfile;

        return (
          <>
            <Image
              source={IconName}
              style={{
                width: IconName === plusTikTokWhite ? 43 : 25,
                height: IconName === plusTikTokWhite ? 28 : 25
              }}
            />
            {routeName === "Plus" ? null : (
              <Text style={{ color: "grey", fontSize: 10 }}>{routeName}</Text>
            )}
          </>
        );
      }
    })
  }
);

export default createAppContainer(Routes);
