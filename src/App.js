import "./App.css";
import Counter from "./components/useState/Counter";
import ObjectExample from "./components/useState/ObjectExample";
import ArrayExample from "./components/useState/ArrayExample";
import DocumentContainer from "./components/useEffect/DocumentContainer";

function App() {
  return (
    <div className="App">
      <section className="App-header">
        {/* useState */}
        {/* <Counter /> */}
        {/* <ObjectExample /> */}
        {/* <ArrayExample /> */}

        {/* useEffect */}
        <DocumentContainer />
      </section>
    </div>
  );
}

export default App;
