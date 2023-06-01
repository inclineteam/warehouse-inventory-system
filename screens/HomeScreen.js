// this is just for navigating through screens while we design it
// you can remove, or change the content of this screen

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Nav from "../components/Nav";
import React from "react";

const HomeScreen = ({ navigation }) => {
  
  // remove header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Nav menu={false} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
    backgroundColor: "#e1e1e1"
  },
  // btn: {
  //   borderWidth: 1,
  //   borderColor: "#e2e8f0",
  //   padding: 10,
  //   paddingLeft: 16,
  //   paddingRight: 16,
  //   backgroundColor: "#fff",
  //   borderRadius: 8,
  //   marginBottom: 14,
  // },
  // btnText: {
  //   fontFamily: "Hanken-Semibold",
  //   fontSize: 14,
  //   fontWeight: "600",
  //   textAlign: "center",
  //   color: "#334155",
  // },
});

export default HomeScreen;
