import { StyleSheet, Text, View } from "react-native";

const ItemsList = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Items</Text>

      <View style={styles.container}></View>
    </View>
  );
};

export default ItemsList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textTransform: "uppercase",
    marginBottom: 6,
    fontFamily: "Hanken-Bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2824C3",
  },
});
