import { View, Text, Switch } from "react-native";
import React from "react";
import { Font } from "../../constants/theme.const";
import { widthPercentageToDP } from "react-native-responsive-screen";
import IconContainer from "../ui/IconContainer";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { useColorScheme } from "nativewind";

const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-row items-center justify-between px-5 gap-x-6 pt-2">
      <Text className=" text-green-800 dark:text-neutral-200" style={{ fontFamily: Font.bold, fontSize: widthPercentageToDP(6) }}>
        STACK NEWS
      </Text>

      <View className="flex-row gap-x-6 items-center">
        <Switch
          onChange={toggleColorScheme}
          value={colorScheme === "dark"}
          thumbColor={colorScheme === "light" ? "lightgray" : "grey"}
          trackColor={{ true: "lightgray" }}
        />
        <IconContainer>
          <MagnifyingGlassIcon size={25} strokeWidth={3} color={colorScheme === "dark" ? "white" : "green"} />
        </IconContainer>
      </View>
    </View>
  );
};

export default Header;
