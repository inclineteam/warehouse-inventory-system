import ActionButtons from "./ActionButtons";
import ItemsList from "./ItemsList";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

// we export components here to be able to import it in one line
// eg: import { ISNav } from '../components/ItemsScreen'
// we use IS (ItemScreen) at the start of the component name as identifier
export {
  Nav as ISNav,
  SearchBar as ISSearchBar,
  ItemsList as ISItemsList,
  ActionButtons as ISActionButtons,
};
