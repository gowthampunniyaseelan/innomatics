import "./App.css";
import Navbar from "./components/Navbar";
import Cryptocurrency from "./components/Cryptocurrency";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nasa from "./components/Nasa";
import Covid from "./components/Covid";
import Product from "./components/Product";
import Home from "./components/Home";
import React from "react";
function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cryptocurrency" element={<Cryptocurrency />} />
              <Route path="/nasa" element={<Nasa />} />
              <Route path="/covid" element={<Covid />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </div>
        </Router>
      </div>
    </React.StrictMode>
  );
}

export default App;
