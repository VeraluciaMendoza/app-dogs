//import "./App.css";
import NavBar from "./components/NavBar";
import Breeds from "./components/Breeds";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <div className="bs-docs-section m-4">
          <div className="row">
            <Breeds />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
