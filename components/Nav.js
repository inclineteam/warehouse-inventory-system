import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../assets/logo.png";

import React from "react";
import { FloatingMenu } from 'react-native-floating-action-menu';

const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const data = [
    { label: 'Do a little dance' },
    { label: 'Make a lil love' },
    { label: 'Get down tonight' },
  ]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleItemPress = (item) => {
    console.log(item);
  }

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
      {/* <Ionicons.Button
        style={{ padding: 0, marginEnd: -16 }}
        name="reorder-three-outline"
        size={38}
        color="#383838"
        backgroundColor="transparent"
      /> */}
      
      
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  nav: {
    marginTop: 15,
    flexDirection: "row",
    width: '100%',
    height: '100%',
    position: 'relative',
    justifyContent: "space-between",
  },
});
