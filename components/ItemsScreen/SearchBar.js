import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput style={styles.searchInput} />
      <TouchableOpacity>
        <Text style={{ fontFamily: "Hanken-Semibold" }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
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
