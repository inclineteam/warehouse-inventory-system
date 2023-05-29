import { StyleSheet, Text, View } from "react-native";
import { items } from "../../dummy-data";
import Item from "./Item";

const ItemsList = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Items</Text>
      <View style={styles.container}>
        {items.map((item) => (
          <Item key={item.id} item={item} navigation={navigation} />
        ))}
      </View>
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
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
  },
});
