import { NavigationProp, RouteProp, useNavigation as useRootNavigation } from "@react-navigation/native";
import { RootNavigator } from "../schema/types";

export default function useNavigation<T extends RootNavigator = RootNavigator>() {
  return useRootNavigation<NavigationProp<T>>();
}
