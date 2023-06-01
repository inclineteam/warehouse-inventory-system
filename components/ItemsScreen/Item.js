import { Image, Text, TouchableOpacity, View } from "react-native";

const Item = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={{
        width: "50%",
        padding: 6,
      }}
      onPress={() => navigation.navigate("Specific Item", { item, navigation })}
    >
      <View
        style={{
          width: "100%",
          borderWidth: 1,
          borderColor: "#2824C3",
          padding: 6,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image
            source={item.img}
            style={{ width: 60, height: 60, resizeMode: "contain" }}
          />
        </View>
        <Text style={{ textAlign: "center", fontFamily: "Hanken-Semibold" }}>
          {item.code}
        </Text>
        <Text
          numberOfLines={1}
          style={{ textAlign: "center", fontFamily: "Hanken-Grotesk" }}
        >
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
