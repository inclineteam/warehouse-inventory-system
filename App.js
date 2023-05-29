import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ItemsScreen from "./screens/ItemsScreen";
import SpecificItem from "./screens/SpecificItemScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Hanken-Grotesk": require("./assets/fonts/HankenGrotesk-VariableFont_wght.ttf"),
    "Hanken-Semibold": require("./assets/fonts/HankenGrotesk-SemiBold.ttf"),
    "Hanken-Bold": require("./assets/fonts/HankenGrotesk-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  }

  const headerStyles = {
    contentStyle: {
      backgroundColor: "#fff",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 18,
    },
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: "#2824C3",
    },
  };

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        screenOptions={{
          animation: "fade_from_bottom",
          animationDuration: 100,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={headerStyles}
        />
        <Stack.Screen
          name="Items"
          component={ItemsScreen}
          options={headerStyles}
        />
        <Stack.Screen
          name="Specific Item"
          component={SpecificItem}
          options={headerStyles}
        />
      </Stack.Navigator>
      <StatusBar style="inverted" />
    </NavigationContainer>
  );
}
