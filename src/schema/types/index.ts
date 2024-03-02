import { NavigatorScreenParams } from "@react-navigation/native";

export type BottomTabs = {
  Home: undefined;
  Discover: undefined;
  SavedNews: undefined;
  Search: undefined;
};

export type RootNavigator = {
  Splash: undefined;
  Welcome: undefined;
  Search: undefined;
  NewsDetails: undefined;
  BottomTabs: NavigatorScreenParams<BottomTabs>;
};
