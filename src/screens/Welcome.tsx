import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Font } from "../constants/theme.const";
import useNavigation from "../hooks/useNavigation";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require("../../assets/images/reporter.jpg")} className="w-full flex-1">
      <StatusBar style="light" />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        start={{ x: 0.5, y: 0.1 }}
        end={{ x: 0.5, y: 1 }}
        className="flex-1 absolute top-0 left-0 w-full h-full flex justify-end space-y-3 pb-10 items-center px-8"
      >
        <Text
          className="text-white text-center leading-[1] tracking-wider"
          style={{ fontSize: heightPercentageToDP(4), fontFamily: Font.bold }}
        >
          Stay Informed from Day One
        </Text>

        <Text
          className="text-white tracking-widest"
          style={{ fontSize: heightPercentageToDP(2.2), fontFamily: Font.original, textAlign: "center" }}
        >
          Discover the latest news with our seamless onboarding experience
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("BottomTabs", { screen: "Home" })}
          activeOpacity={0.7}
          className="bg-green-800 w-full rounded-full py-2 px-12"
        >
          <Text className="text-white text-center" style={{ fontFamily: Font.original, fontSize: 20 }}>
            Getting Started
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Welcome;
