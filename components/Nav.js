import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../assets/logo.png";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-web";

const Nav = ({ navigation, menu }) => {
  const [showMenu, setShowMenu] = React.useState(menu);
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
          alignItems: "center",
          position: "absolute",
          display: showMenu ? "flex" : "none",
          left: "55%",
          top: "100%",
          padding: 28,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
          backgroundColor: "#fff",
          borderColor: "#2824c2",
          borderWidth: 2,
        }}
      >
        
        <Text
        onPress={() => {{ navigation.navigate("Home") }}}
        >Home<Image></Image></Text>
        <Text
        onPress={() => {{ navigation.navigate("Home") }}}
        >Acc. Information<Image></Image></Text>
        <Text
        onPress={() => {{ navigation.navigate("Home") }}}
        >Inventory<Image></Image></Text>
        <Text
        onPress={() => {{ navigation.navigate("Home") }}}
        >Stocks<Image></Image></Text>
        <Text
        onPress={() => {{ navigation.navigate("Items") }}}
        >Items<Image></Image></Text>
        <Text
        onPress={() => {{ navigation.navigate("Home") }}}
        >Transactions<Image></Image></Text>
        <Text
        onPress={() => {{ navigation.navigate("Home") }}}
        >Returns<Image></Image></Text>
        <Text
        onPress={() => {{ navigation.navigate("Home") }}}
        >About<Image></Image></Text>
        <Text
        onPress={() => {{ navigation.navigate("Home") }}}
        >WIS Contacts<Image></Image></Text>
        
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
    zIndex: 1,
    width: "100%",
    position: "relative",
  },
});
