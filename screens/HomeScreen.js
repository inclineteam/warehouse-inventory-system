// this is just for navigating through screens while we design it
// you can remove, or change the content of this screen

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Nav from "../components/Nav";

const HomeScreen = ({ navigation }) => {
  // return (
  //   <View style={styles.container}>
  //     <TouchableOpacity
  //       style={styles.btn}
  //       onPress={() => navigation.navigate("Items")}
  //     >
  //       <Text style={styles.btnText}>Go to Items Screen</Text>
  //     </TouchableOpacity>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  btn: {
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 10,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 14,
  },
  btnText: {
    fontFamily: "Hanken-Semibold",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#334155",
  },
});

export default HomeScreen;
