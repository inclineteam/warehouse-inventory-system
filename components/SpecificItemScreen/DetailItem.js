import { View, Text, StyleSheet } from "react-native";

const DetailItem = ({ label, value }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  wrapper: { flexDirection: "row", marginBottom: 10 },
  label: { fontFamily: "Hanken-Semibold", flex: 3, marginRight: 24 },
  value: { flex: 4, fontFamily: "Hanken-Grotesk" },
});
