import { View, Text } from "react-native";
import React, { ReactNode } from "react";

interface Props {
  size?: number;
  children: ReactNode;
}

const IconContainer = ({ size, children }: Props) => {
  return <View className="bg-neutral-300 dark:bg-green-800 p-2 rounded-full">{children}</View>;
};

export default IconContainer;
