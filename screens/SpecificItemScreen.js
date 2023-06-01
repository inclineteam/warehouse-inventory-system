import ScreenLayout from "../components/ScreenLayout";
import Nav from "../components/Nav";
import { SISActionButtons, SISDetails } from "../components/SpecificItemScreen";
import React from "react";

const SpecificItem = ({ navigation, route }) => {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
  });

  }, [navigation]);
  return (
    <ScreenLayout>
      <Nav menu={false} navigation={navigation}/>
      <SISDetails item={route.params.item} />
      <SISActionButtons />
    </ScreenLayout>
  );
};

export default SpecificItem;
