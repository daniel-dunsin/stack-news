import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NewsCategories } from "../../schema/enums/news.enum";
import { Font } from "../../constants/theme.const";
import { useColorScheme } from "nativewind";
import { widthPercentageToDP } from "react-native-responsive-screen";

interface Props {
  category: NewsCategories;
  selectedCategory: NewsCategories;
  onSelect(category: NewsCategories): void;
}

const SingleCategory = ({ category, selectedCategory, onSelect }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onSelect(category)}>
      <View
        className={`${selectedCategory === category ? "bg-green-800" : "bg-gray-300 dark:bg-neutral-600"} py-2 px-4 rounded-full`}
      >
        <Text
          className={`${selectedCategory === category ? "text-white" : "dark:text-white text-[gray]"} capitalize`}
          style={{ fontFamily: Font.original, fontSize: widthPercentageToDP(3) }}
        >
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleCategory;
