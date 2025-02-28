import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import TypeChecker from "./components/TypeChecker/TypeChecker";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/type" element={<TypeChecker />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
