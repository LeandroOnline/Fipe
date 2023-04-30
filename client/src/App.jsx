import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

export const context = createContext();

export const API = "http://localhost:3000/api";

function App() {
  const [reset, setReset] = useState(false);
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      <context.Provider value={{ reset, setReset, logged, setLogged }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
