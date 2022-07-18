import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { searchForPokemon } from "./data/api.js";

function App() {

  const onSearchHandler = (pokemonName) => {
    console.log("pokemon ", pokemonName)
  }

  return (
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler}/>
      <div className="App">
        <h1>Pikachu!</h1>
      </div>
    </div>
  );
}

export default App;
