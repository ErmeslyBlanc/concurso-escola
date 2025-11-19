import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Concursos from "./pages/Concursos";
import Sobre from "./pages/Sobre";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/concursos">Concursos</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>

      <div className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concursos" element={<Concursos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
