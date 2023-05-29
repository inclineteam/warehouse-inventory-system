import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ItemsScreen from "./screens/ItemsScreen";
import SpecificItem from "./screens/SpecificItemScreen";
import AddItem from "./screens/AddItem";

const Stack = createNativeStackNavigator();

export default function App() {
  const headerStyles = {
    contentStyle: {
      backgroundColor: "#fff",
    },
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: "#f1f5f9",
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_right",
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
        <Stack.Screen
          name="Add Item"
          component={AddItem}
          options={headerStyles}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
