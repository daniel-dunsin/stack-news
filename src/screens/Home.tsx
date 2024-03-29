import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import Header from "../components/home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import BreakingNews from "../components/home/BreakingNews";
import { useGetBreakingNews } from "../services";
import RecommendedNews from "../components/home/RecommendedNews";

const Home = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView className={`flex-1 ${colorScheme === "dark" ? "bg-neutral-800" : "bg-white"}`}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Header />
      <BreakingNews />
      <RecommendedNews />
    </SafeAreaView>
  );
};

export default Home;
