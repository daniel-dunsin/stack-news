import { View, Text, Image } from "react-native";
import React from "react";
import { News } from "../../schema/interfaces/news.interface";
import { Font } from "../../constants/theme.const";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { BookmarkIcon } from "react-native-heroicons/outline";
import { useColorScheme } from "nativewind";

interface Props extends News {}

const SingleNews = (props: Props) => {
  const { colorScheme } = useColorScheme();
  return (
    <View className="flex-row justify-between items-center gap-x-6 my-2">
      <Image
        width={90}
        height={90}
        resizeMode="cover"
        className="rounded-xl w-[90px] h-[90px]"
        loadingIndicatorSource={require("../../../assets/images/loader.gif")}
        source={props?.urlToImage ? { uri: props.urlToImage } : require("../../../assets/images/reporter.jpg")}
      />

      <View className="flex-1">
        {!props?.author?.includes("https") && (
          <Text className="text-neutral-800 dark:text-white" style={{ fontFamily: Font.original }}>
            {props?.author}
          </Text>
        )}

        <Text className="text-neutral-800 dark:text-white" style={{ fontSize: heightPercentageToDP(1.8), fontFamily: Font.bold }}>
          {props?.title?.length > 40 ? `${props.title}...` : props.title}
        </Text>
      </View>

      <View>
        <BookmarkIcon size={20} color={colorScheme === "light" ? "grey" : "white"} />
      </View>
    </View>
  );
};

export default SingleNews;
