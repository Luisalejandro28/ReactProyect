import {NavBar} from "./components/layout/navbar/NavBar";
import { Footer } from "./components/layout/footer/Footer";
import ItemsListContainer from "./components/pages/itemsListContainer/ItemsListContainer"

function App() {
  return (
    <div>
      <NavBar />
      <ItemsListContainer />
      <Footer />
    </div>
  );
}

export default App;
