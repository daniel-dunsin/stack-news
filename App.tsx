import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabs, RootNavigator } from "./src/schema/types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Discover from "./src/screens/Discover";
import Search from "./src/screens/Search";
import SavedNews from "./src/screens/SavedNews";
import Splash from "./src/screens/Splash";
import Welcome from "./src/screens/Welcome";
import NewsDetails from "./src/screens/NewsDetails";
import IonIcons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator<RootNavigator>();
const BottomTab = createBottomTabNavigator<BottomTabs>();

export default function App() {
  const BottomTabNavigation = () => {
    return (
      <BottomTab.Navigator
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ focused }) => {
              let iconName = "";
              if (route.name === "Home") {
                iconName = focused ? "home-sharp" : "home-outline";
              } else if (route.name === "Discover") {
                iconName = "compass";
              } else if (route.name === "Search") {
                iconName = "search";
              } else if (route.name === "SavedNews") {
                iconName = "bookmarks";
              }

              return <IonIcons name="bookmarks" size={26} color={focused ? "green" : "#222"} />;
            },
          };
        }}
      >
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Discover" component={Discover} />
        <BottomTab.Screen name="SavedNews" component={SavedNews} />
        <BottomTab.Screen name="Search" component={Search} />
      </BottomTab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="NewsDetails" component={NewsDetails} options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="BottomTabs" component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
