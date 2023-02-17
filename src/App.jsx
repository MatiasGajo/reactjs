
import ItemlistContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <div><NavBar /></div>
      <div className="menu-productos">
      <Routes>
        <Route path={"/"} element={<ItemlistContainer />} />
        <Route path={"/category/:id"} element={<ItemlistContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
