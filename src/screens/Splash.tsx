import { View, Text, ImageBackground } from "react-native";
import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import { Font } from "../constants/theme.const";
import * as SplashScreen from "expo-splash-screen";
import useNavigation from "../hooks/useNavigation";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

const Splash = () => {
  const navigation = useNavigation();

  const [fontLoaded, fontError] = useFonts({
    [Font.bold]: require("../../assets/fonts/Poppins-Bold.ttf"),
    [Font.light]: require("../../assets/fonts/Poppins-Light.ttf"),
    [Font.original]: require("../../assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutChange = useCallback(async () => {
    if (fontLoaded && !fontError) {
      await SplashScreen.hideAsync();
    }

    setTimeout(() => {
      navigation.navigate("Welcome");
    }, 2000);
  }, [fontLoaded, fontError]);

  useEffect(() => {
    onLayoutChange();
  });

  return (
    <View className="flex-1" onLayout={onLayoutChange}>
      <ImageBackground source={require("../../assets/images/reporter.jpg")} className="flex-1 w-full justify-center items-center">
        <LinearGradient
          colors={["rgba(1, 44, 1, 0.4)", "rgba(2, 44, 2, 0.8)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute flex-1 h-full w-full justify-center items-center"
        >
          <Text className="font-bold text-white" style={{ fontSize: heightPercentageToDP(3.5) }}>
            STACK NEWS
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Splash;
