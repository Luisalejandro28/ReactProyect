import {Counter} from "./components/common/counter/Counter"
//import { NavBar } from "@mui/material";
import {NavBar} from "./components/layout/navbar/NavBar";
import { Footer } from "./components/layout/footer/Footer";
import ItemsListContainer from "./components/pages/itemsListContainer/ItemsListContainer"

function App() {
  return (
    <div>
      <NavBar />
      <ItemsListContainer />
      <Footer />
      {/* <Counter/> */}
    </div>
  );
}

export default App;
