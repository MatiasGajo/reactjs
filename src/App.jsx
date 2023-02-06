import Cuerpo from "./components/Cuerpo";
import ItemlistContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <hr />
      <Cuerpo />
      <ItemlistContainer mensaje="Por el momento no se encuentran productos"/>
    </div>
  );
}

export default App;
