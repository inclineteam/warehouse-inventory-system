import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logo from "../assets/logo.png";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Constants from "expo-constants";
import NavMenuItem from "./NavMenuItem";
import { useNavigation } from "@react-navigation/native";

const Nav = ({ menu }) => {
  const [showMenu, setShowMenu] = React.useState(menu);
  const navigation = useNavigation();
  // when change navigation, set showMenu to false
  React.useEffect(() => {
    setShowMenu(false);
  }, [navigation]);

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
          Warehouse Inventory Systems
        </Text>
      </View>

      {/**
       * Floating menu button
       */}
      <Ionicons.Button
        style={{ padding: 0, marginEnd: -16 }}
        name="reorder-three-outline"
        size={38}
        color="#383838"
        backgroundColor="transparent"
        onPress={() => setShowMenu(!showMenu)}
      />

      {/**
       * This is the floating menu from scratch
       * hide it for now
       * position: "absolute",
       */}

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          position: "absolute",
          overflow: "hidden",
          display: showMenu ? "flex" : "none",
          right: 0,
          marginEnd: -20,
          top: Constants.statusBarHeight + 60,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
          backgroundColor: "#fff",
          borderColor: "#2824c2",
          borderWidth: 2,
        }}
      >
        <NavMenuItem icon="home-outline" label="Home" navigateTo="Home" />
        <NavMenuItem icon="person-circle-outline" label="Acc. Information" navigateTo="Home" />
        <NavMenuItem icon="newspaper-outline" label="Inventory" navigateTo="Home" />
        <NavMenuItem icon="cube-outline" label="Stocks" navigateTo="Home" />
        <NavMenuItem icon="cart-outline" label="Items" navigateTo="Items" />
        <NavMenuItem icon="swap-horizontal-outline" label="Transactions" navigateTo="Home" />
        <NavMenuItem icon="arrow-undo-outline" label="Returns" navigateTo="Home" />
        <NavMenuItem icon="information-circle-outline" label="About" navigateTo="Home" />
        <NavMenuItem icon="call-outline" label="WIS Contacts" navigateTo="Home" />
        <View style={{ padding: 30 }}>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: "#2824C3",
              padding: 4,
              paddingLeft: 18,
              paddingRight: 20,
              borderRadius: 9999,
            }}
          >
            <Text
              style={{
                fontFamily: "Hanken-Semibold",
                textAlign: "center",
              }}
            >
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  nav: {
    paddingTop: Constants.statusBarHeight + 10,
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1,
    width: "100%",
    position: "relative",
  },
});
