import { ScrollView, StyleSheet, View } from "react-native";

const ScreenLayout = ({ children }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.wrapper}>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
};

export default ScreenLayout;

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    backgroundColor: "#2824C3",
    paddingBottom: 30,
  },
  container: {
    backgroundColor: "#e1e1e1",
    flex: 1,
    padding: 20,
  },
});
