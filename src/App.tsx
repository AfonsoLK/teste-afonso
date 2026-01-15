import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <button
          onClick={() => {
            document.body.style.overflow = "hidden";
          }}
        >
          congela tela
        </button>
        <h1>Vite + React</h1>
        <p className="hero-subtitle">
          Construa aplicações web modernas com as melhores ferramentas
        </p>
        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
