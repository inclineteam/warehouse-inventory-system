import ScreenLayout from "../components/ScreenLayout";
import Nav from "../components/Nav";
import { SISActionButtons, SISDetails } from "../components/SpecificItemScreen";
import React from "react";

const SpecificItem = ({ route }) => {
  return (
    <ScreenLayout>
      <Nav menu={false} />
      <SISDetails item={route.params.item} />
      <SISActionButtons />
    </ScreenLayout>
  );
};

export default SpecificItem;
