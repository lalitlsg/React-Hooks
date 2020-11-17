import "./App.css";
import Counter from "./components/useState/Counter";
import ObjectExample from "./components/useState/ObjectExample";
import ArrayExample from "./components/useState/ArrayExample";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        {/* <Counter /> */}
        {/* <ObjectExample /> */}
        <ArrayExample />
      </section>
    </div>
  );
}

export default App;
