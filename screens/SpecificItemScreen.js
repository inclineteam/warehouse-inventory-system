import ScreenLayout from "../components/ScreenLayout";
import Nav from "../components/Nav";
import { SISActionButtons, SISDetails } from "../components/SpecificItemScreen";

const SpecificItem = ({ route }) => {
  return (
    <ScreenLayout>
      <Nav />
      <SISDetails item={route.params.item} />
      <SISActionButtons />
    </ScreenLayout>
  );
};

export default SpecificItem;
