import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, FlatList, RefreshControl } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Font } from "../constants/theme.const";
import { News } from "../schema/interfaces/news.interface";
import { getBookmarkedNews, removeBookmarkedNews } from "../utils/news.utils";
import SingleNews from "../components/ui/SingleNews";
import { useFocusEffect } from "@react-navigation/native";

const SavedNews = () => {
  const { colorScheme } = useColorScheme();

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [news, setNews] = useState<News[]>();

  const getNews = useCallback(async () => {
    const news = await getBookmarkedNews();
    setNews(news);
  }, []);

  useFocusEffect(() => {
    getNews();
  });

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-neutral-800 px-5">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      {/* Header */}
      <View className="flex-row items-center justify-between gap-x-6 pt-10">
        <Text
          className=" text-green-800 dark:text-neutral-200"
          style={{ fontFamily: Font.bold, fontSize: widthPercentageToDP(6) }}
        >
          Saved Articles
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={async () => {
            await removeBookmarkedNews();
            setNews([]);
          }}
          className="bg-green-800 py-2 px-4 rounded-md"
        >
          <Text className="text-white" style={{ fontFamily: Font.original }}>
            CLEAR
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await getNews();
              setRefreshing(false);
            }}
          />
        }
      >
        <FlatList
          scrollEnabled={false}
          nestedScrollEnabled={true}
          data={news}
          renderItem={({ item }) => <SingleNews {...item} onBookmark={getNews} />}
          keyExtractor={(item, index) => item.urlToImage + item.title + index.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SavedNews;
