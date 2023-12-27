import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneratePDF from "./components/GeneratePDF";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Gerador de PDF</h1>
      <GeneratePDF />
    </div>
  );
}

export default App;
