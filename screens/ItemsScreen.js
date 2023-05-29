import { ScrollView, StyleSheet, View } from "react-native";
import {
  ISActionButtons,
  ISItemsList,
  ISNav,
  ISSearchBar,
} from "../components/ItemsScreen";

const ItemsScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.wrapper}>
      <View style={styles.container}>
        <ISNav />
        <ISSearchBar />
        <ISItemsList />
        <ISActionButtons navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default ItemsScreen;

const styles = StyleSheet.create({
  wrapper: {
    fontFamily: "Hanken-Grotesk",
    flexGrow: 1,
    backgroundColor: "#2824C3",
    paddingBottom: 30,
  },
  container: {
    backgroundColor: "#e1e1e1",
    flex: 1,
    padding: 20,
  },
  logo: {
    resizeMode: "contain",
    width: 40,
    height: 40,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#2824C3",
    borderRadius: 9999,
    backgroundColor: "#fff",
    padding: 2,
    paddingLeft: 14,
    paddingRight: 14,
    marginRight: 10,
  },
});
