import DefinitionsList from "./components/DefinitionsList";
import definitions from "./data";

function App() {
  return (
    <div className="App">
      <DefinitionsList data={definitions} />
    </div>
  );
}

export default App;
