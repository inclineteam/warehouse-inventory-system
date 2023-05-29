import {
  ISActionButtons,
  ISItemsList,
  ISSearchBar,
} from "../components/ItemsScreen";
import Nav from "../components/Nav";
import ScreenLayout from "../components/ScreenLayout";

const ItemsScreen = ({ navigation }) => {
  return (
    <ScreenLayout>
      <Nav />
      <ISSearchBar />
      <ISItemsList navigation={navigation} />
      <ISActionButtons />
    </ScreenLayout>
  );
};

export default ItemsScreen;
