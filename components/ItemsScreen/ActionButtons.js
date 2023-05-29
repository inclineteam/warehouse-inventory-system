import { StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ActionButtons = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Ionicons.Button
        style={styles.btn}
        name="add-outline"
        backgroundColor="#fff"
        color="#000"
        borderRadius={9999}
        onPress={() => navigation.navigate("Add Item")}
      >
        <Text style={{ fontFamily: "Hanken-Semibold" }}>Add</Text>
      </Ionicons.Button>
      <View style={{ marginLeft: 8 }}>
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
    justifyContent: "flex-end",
  },
  btn: {
    borderWidth: 1,
    borderColor: "#2824C3",
    padding: 4,
    paddingLeft: 18,
    paddingRight: 20,
  },
});
