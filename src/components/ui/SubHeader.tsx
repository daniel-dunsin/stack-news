import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { Font } from "../../constants/theme.const";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { useColorScheme } from "nativewind";

interface Props {
  text: string;
}

const SubHeader = ({ text }: Props) => {
  const { colorScheme } = useColorScheme();
  return (
    <View className="px-5 flex-row items-center justify-between space-x-2">
      <Text
        className="text-green-800 dark:text-neutral-200"
        style={{ fontFamily: Font.bold, fontSize: heightPercentageToDP(2.3) }}
      >
        {text}
      </Text>
      <Text
        className={`${colorScheme === "light" ? "text-gray-700" : "text-neutral-200"} font-semibold`}
        style={{ fontFamily: Font.bold, fontSize: heightPercentageToDP(1.9) }}
      >
        View All
      </Text>
    </View>
  );
};

export default SubHeader;
