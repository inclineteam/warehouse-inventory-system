import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../assets/logo.png";
import React from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = React.useState(true);
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

      {/**
       * This is the floating menu from scratch
       * hide it for now
       * position: "absolute",
       */}

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          display: showMenu ? "flex" : "none",
          left: "70%",
          top: 100,
          backgroundColor: "red",
        }}
      >
        <Text style={{ color: "white" }}>top is set to `100`</Text>
        <Text>Home</Text>
        <Text>Inventory</Text>
        <Text>Reports</Text>
      </View>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  nav: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
