import { View, Text, TextInput, ScrollView, FlatList, RefreshControl } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { Font } from "../constants/theme.const";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { NewsCategories } from "../schema/enums/news.enum";
import SingleCategory from "../components/ui/SingleCategory";
import { useGetNews } from "../services";
import Loader from "../components/ui/Loader";
import SingleNews from "../components/ui/SingleNews";

const Discover = () => {
  const { colorScheme } = useColorScheme();
  const [selectedCategory, setSelectedCategory] = useState<NewsCategories>(NewsCategories.HEALTH);

  const onSelect = useCallback((category: NewsCategories) => {
    setSelectedCategory(category);
  }, []);

  const { data, isLoading, isRefetching, refetch } = useGetNews(selectedCategory);

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-neutral-800 px-5 w-full">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      {/* Header */}
      <View>
        <Text
          className=" text-green-800 dark:text-neutral-200"
          style={{ fontFamily: Font.bold, fontSize: widthPercentageToDP(6) }}
        >
          Discover
        </Text>
        <Text className="text-grey-200 dark:text-white" style={{ fontFamily: Font.original, fontSize: widthPercentageToDP(4) }}>
          News from all over the world
        </Text>

        <View className="mt-4 flex-row rounded-full bg-neutral-200 dark:bg-white px-4  items-center">
          <MagnifyingGlassIcon size={20} color={colorScheme === "dark" ? "green" : "gray"} />
          <TextInput className="py-2 ml-2 flex-1" placeholder="Search for news" />
        </View>

        {/* Categories */}
        <ScrollView
          horizontal={true}
          scrollEnabled={true}
          className="w-full pt-6"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "flex-start", columnGap: 5 }}
        >
          {Object.values(NewsCategories).map((category, index) => (
            <SingleCategory onSelect={onSelect} category={category} key={index} selectedCategory={selectedCategory} />
          ))}
        </ScrollView>
      </View>

      {/* News */}
      <ScrollView
        className="mt-6"
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={isRefetching as boolean} onRefresh={() => refetch()} />}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <SingleNews {...item} />}
            keyExtractor={(item, index) => String(index)}
            scrollEnabled={false}
            nestedScrollEnabled={true}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
