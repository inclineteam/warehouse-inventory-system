import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../../assets/logo.png";
import Ionicons from "@expo/vector-icons/Ionicons";

const Nav = () => {
  return (
    <View style={styles.nav}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image source={logo} style={styles.logo} />
        <Text
          style={{
            marginLeft: 8,
            fontFamily: "Hanken-Bold",
            fontSize: 14,
            flex: 1,
          }}
        >
          Warehouse Inventory System
        </Text>
      </View>
      <Ionicons.Button
        style={{ padding: 0, marginEnd: -16 }}
        name="reorder-three-outline"
        size={38}
        color="#383838"
        backgroundColor="transparent"
      />
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
