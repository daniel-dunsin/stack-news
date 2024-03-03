import { View, Text, FlatList } from "react-native";
import React from "react";
import SubHeader from "../ui/SubHeader";
import { ScrollView } from "react-native";
import { useGetRecommendedNews } from "../../services";
import SingleNews from "../ui/SingleNews";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Loader from "../ui/Loader";

const RecommendedNews = () => {
  const { data, isLoading, isError } = useGetRecommendedNews();

  return (
    <View className="mt-4">
      <SubHeader text="Recommended News" />

      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView className="px-5 mt-6" showsVerticalScrollIndicator={false}>
          <FlatList
            scrollEnabled={false}
            nestedScrollEnabled={true}
            data={data?.slice(0, 40)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <SingleNews {...item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      )}
    </View>
  );
};

export default RecommendedNews;
