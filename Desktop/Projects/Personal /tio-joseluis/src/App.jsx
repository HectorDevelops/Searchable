import "./App.css";
import InMemory from "./components/InMemory";
import Informacion from "./components/Informacion";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <InMemory />
      <Informacion />
    </div>
  );
}

export default App;
