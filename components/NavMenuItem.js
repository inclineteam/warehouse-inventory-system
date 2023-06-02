import { Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const NavMenuItem = ({ navigateTo, label, icon }) => {
  const { navigate } = useNavigation();

  return (
    <Ionicons.Button
      style={{ borderBottomWidth: 1, borderBottomColor: "#000", paddingLeft: 20, paddingRight: 20 }}
      backgroundColor="#fff"
      color="#000"
      borderRadius={0}
      name={icon}
      onPress={() => navigate(navigateTo)}
    >
      <Text style={{ fontFamily: "Hanken-Semibold", marginLeft: 4 }}>{label}</Text>
    </Ionicons.Button>
  );
};

export default NavMenuItem;
