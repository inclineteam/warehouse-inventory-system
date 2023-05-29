import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ActionButtons = () => {
  return (
    <View style={styles.wrapper}>
      <Ionicons.Button
        style={styles.btn}
        name="pencil-outline"
        backgroundColor="#fff"
        color="#000"
        borderRadius={9999}
      >
        <Text style={{ fontFamily: "Hanken-Semibold" }}>Modify</Text>
      </Ionicons.Button>
      <View style={{ marginLeft: 4 }}>
        <Ionicons.Button
          style={styles.btn}
          name="trash-outline"
          backgroundColor="#fff"
          color="#000"
          borderRadius={9999}
        >
          <Text style={{ fontFamily: "Hanken-Semibold" }}>Delete</Text>
        </Ionicons.Button>
      </View>
      <View style={{ marginLeft: 4 }}>
        <Ionicons.Button
          style={styles.btn}
          name="print-outline"
          backgroundColor="#fff"
          color="#000"
          borderRadius={9999}
        >
          <Text style={{ fontFamily: "Hanken-Semibold" }}>Print</Text>
        </Ionicons.Button>
      </View>
    </View>
  );
};

export default ActionButtons;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    borderWidth: 1,
    borderColor: "#2824C3",
    padding: 4,
    paddingLeft: 18,
    paddingRight: 20,
  },
});
