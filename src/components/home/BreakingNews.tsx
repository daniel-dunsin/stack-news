import { View, Text, ImageBackground, Image, ActivityIndicator } from "react-native";
import React from "react";
import SubHeader from "../ui/SubHeader";
import Carousel from "react-native-snap-carousel";
import { useGetBreakingNews } from "../../services";
import { News } from "../../schema/interfaces/news.interface";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { Font } from "../../constants/theme.const";
import Loader from "../ui/Loader";

const BreakingNews = () => {
  const { isError, isLoading, data, refetch } = useGetBreakingNews();
  return (
    <View className="mt-3">
      <SubHeader text="Breaking News" />

      {isLoading ? (
        <Loader />
      ) : (
        <Carousel
          sliderWidth={widthPercentageToDP(100)}
          itemWidth={widthPercentageToDP(80)}
          data={data?.filter((data) => !data.title.match(/removed/i)) as News[]}
          firstItem={1}
          vertical={false}
          contentContainerCustomStyle={{ marginTop: 10 }}
          renderItem={({ item, index }) => (
            <View className="w-full h-[200px] rounded-xl overflow-hidden">
              <Image
                loadingIndicatorSource={require("../../../assets/images/loader.gif")}
                source={item?.urlToImage ? { uri: item?.urlToImage } : require("../../../assets/images/reporter.jpg")}
                className="w-full h-full"
              />

              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)", "rgba(0,0,0,0.8)"]}
                start={{ x: 0, y: 0.3 }}
                end={{ x: 0, y: 1 }}
                className="absolute top-0 left-0 w-full h-full justify-end pl-6 pr-3 pb-3"
              >
                <Text className="text-white" style={{ fontSize: widthPercentageToDP(3.8), fontFamily: Font.bold }}>
                  {item?.title?.length > 100 ? `${item?.title?.slice(0, 100)}...` : item?.title}
                </Text>
              </LinearGradient>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          autoplay={true}
        />
      )}
    </View>
  );
};

export default BreakingNews;
