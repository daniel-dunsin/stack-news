import { View, Text, TouchableOpacity, Alert, Share, SafeAreaView } from "react-native";
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { NavigationProp, RouteProp, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { RootNavigator } from "../schema/types";
import IconContainer from "../components/ui/IconContainer";
import { ChevronLeftIcon, ShareIcon } from "react-native-heroicons/solid";
import { WebView } from "react-native-webview";
import Loader from "../components/ui/Loader";

const NewsDetails = () => {
  const { params } = useRoute<RouteProp<RootNavigator, "NewsDetails">>();
  const { colorScheme } = useColorScheme();
  const { setOptions, goBack, canGoBack } = useNavigation<NavigationProp<RootNavigator, "NewsDetails">>();

  const onShare = useCallback(async () => {
    try {
      await Share.share({ message: params?.url as string });
    } catch (error: any) {
      Alert.alert(`Unable to share message ${error.message}`);
    }
  }, [params?.url]);

  useFocusEffect(() => {
    setOptions({
      headerShown: true,
      headerTitle: "",
      headerStyle: { backgroundColor: colorScheme === "dark" ? "#333" : "#fefefe" },
      headerLeft: () => (
        <TouchableOpacity onPress={() => canGoBack() && goBack()} activeOpacity={0.8}>
          <IconContainer>
            <ChevronLeftIcon size={20} strokeWidth={4} color={colorScheme === "dark" ? "white" : "#222"} />
          </IconContainer>
        </TouchableOpacity>
      ),

      headerRight: () => (
        <TouchableOpacity onPress={onShare} activeOpacity={0.8}>
          <IconContainer>
            <ShareIcon size={20} strokeWidth={4} color={colorScheme === "dark" ? "white" : "#777"} />
          </IconContainer>
        </TouchableOpacity>
      ),
    });
  });

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-neutral-800">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />

      <WebView pullToRefreshEnabled={true} source={{ uri: params?.url as string }} />
    </SafeAreaView>
  );
};

export default NewsDetails;
