import React from "react";
import {
  ISActionButtons,
  ISItemsList,
  ISSearchBar,
} from "../components/ItemsScreen";
import Nav from "../components/Nav";
import ScreenLayout from "../components/ScreenLayout";

const ItemsScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

  }, [navigation]);
  return (
    <ScreenLayout>
      <Nav menu={false}  navigation={navigation}/>
      <ISSearchBar />
      <ISItemsList navigation={navigation} />
      <ISActionButtons />
    </ScreenLayout>
  );
};

export default ItemsScreen;
