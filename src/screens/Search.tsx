import { View, Text, SafeAreaView, TextInput, ScrollView, FlatList } from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { XMarkIcon } from "react-native-heroicons/solid";
import { Font } from "../constants/theme.const";
import { debounce } from "lodash";
import { useSearchNews } from "../services";
import SingleNews from "../components/ui/SingleNews";
import Loader from "../components/ui/Loader";

const Search = () => {
  const { colorScheme } = useColorScheme();
  const [text, setText] = useState<string>("");

  const { data, mutate, isPending } = useSearchNews(text);

  const handleChangeText = async (text: string) => {
    setText(text);
    if (text.length >= 3) {
      await mutate();
    }
  };

  // @ts-ignore
  const onChangeText = useMemo(() => debounce((text) => handleChangeText(text), 400), []);

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-neutral-800 px-5 pt-8">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />

      <View className="mt-4 flex-row rounded-md bg-neutral-200 dark:bg-white px-4  items-center">
        <TextInput value={text} onChangeText={onChangeText} className="py-2 ml-2 flex-1" placeholder="Search for news" />
        <XMarkIcon strokeWidth={5} size={22} color={colorScheme === "dark" ? "green" : "gray"} />
      </View>

      <View className="mt-3">
        <Text className="text-green-800 dark:text-neutral-200" style={{ fontFamily: Font.bold }}>
          {data?.length || 0} News for {text}
        </Text>

        {isPending && (
          <View className="mt-2">
            <Loader />
          </View>
        )}

        {data && (
          <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
            <FlatList
              nestedScrollEnabled={true}
              scrollEnabled={false}
              data={data}
              renderItem={({ item, index }) => <SingleNews {...item} />}
              keyExtractor={(item, index) => item.urlToImage + item.title + index.toString()}
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Search;
