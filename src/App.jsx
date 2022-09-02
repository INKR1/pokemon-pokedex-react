import "./App.css";
import Favorites from "./pages/Favorites";
import Pokedex from "./pages/Pokedex";
import Searchbar from "./pages/Searchbar";
import { Route, Routes } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import About from "./pages/About";


function App() {

  return (
      <div className="App">
        <Layout> 
          <Routes>
              <Route path="/" element={ <About /> } />
              <Route path="/search" element={<Searchbar />} />
              <Route path="/pokedex" element={<Pokedex /> } />
              <Route path="/favorites" element={<Favorites/>} />
          </Routes>
          
        </Layout>
      </div>
  );
}

export default App;
