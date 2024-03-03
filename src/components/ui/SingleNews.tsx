import { View, Text, Image } from "react-native";
import React, { useEffect, useMemo } from "react";
import { News } from "../../schema/interfaces/news.interface";
import { Font } from "../../constants/theme.const";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { BookmarkIcon } from "react-native-heroicons/solid";
import { useColorScheme } from "nativewind";
import { bookmarkNews, checkNewsInBookmarks, removeNewsFromBookmark } from "../../utils/news.utils";

interface Props extends News {}

const SingleNews = (props: Props) => {
  const [inBookmark, setInBookmark] = React.useState<boolean>(false);
  const { colorScheme } = useColorScheme();

  const onBookmark = React.useCallback(async () => {
    if (inBookmark) {
      await removeNewsFromBookmark(props);
      setInBookmark(false);
    } else {
      await bookmarkNews(props);
      setInBookmark(true);
    }
  }, [inBookmark]);

  useEffect(() => {
    async () => {
      const inBookmark = await checkNewsInBookmarks(props);
      setInBookmark(inBookmark);
    };
  }, [inBookmark]);

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
        <BookmarkIcon onPress={onBookmark} size={20} color={inBookmark ? "green" : colorScheme === "light" ? "grey" : "white"} />
      </View>
    </View>
  );
};

export default SingleNews;
