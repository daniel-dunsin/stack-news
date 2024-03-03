import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const Loader = () => {
  return <ActivityIndicator size={"large"} color={"green"} className="mx-auto" />;
};

export default Loader;