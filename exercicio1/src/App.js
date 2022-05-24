import { useState } from "react";
import "./App.css";
import useCounter from "./hooks/counter";

function App() {
  const [initialValue, setInitialValue] = useState(0);
  const { value, add, substract, message } = useCounter(initialValue);
  const getInitialValue = (e) => {
    e.preventDefault();
    setInitialValue(parseInt(e.target.elements[0].value));
  };

  return (
    <div className="App">
      <header></header>
      <main>
        <h1>Counter:{value}</h1>
        <input type="submit" onClick={add} value="+1" />
        <input type="submit" onClick={substract} value="-1" />
        <h2>{message}</h2>
        <form onSubmit={getInitialValue}>
          <input
            id="initValue"
            type="number"
            placeholder="valor inicial..."
            min="0"
          />
          <button>Comezar</button>
        </form>
      </main>
    </div>
  );
}

export default App;
