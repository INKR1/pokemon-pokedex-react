import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <div className="App">
        <h1>Pikachu!</h1>
      </div>
    </div>
  );
}

export default App;
 