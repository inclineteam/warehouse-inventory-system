import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../assets/logo.png";
import React from "react";


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

      {/**
       * This is the floating menu from scratch
       */}      
      
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
