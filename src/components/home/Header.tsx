import { View, Text, Switch, TouchableOpacity } from "react-native";
import React from "react";
import { Font } from "../../constants/theme.const";
import { widthPercentageToDP } from "react-native-responsive-screen";
import IconContainer from "../ui/IconContainer";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { useColorScheme } from "nativewind";
import useNavigation from "../../hooks/useNavigation";

const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const navigation = useNavigation();

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

        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <IconContainer>
            <MagnifyingGlassIcon size={25} strokeWidth={3} color={colorScheme === "dark" ? "white" : "green"} />
          </IconContainer>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
