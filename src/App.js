import React from "react";
import "./resources/App.css";

import Header from "./components/Header"
import About from "./components/About"
import Food from "./components/Food"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Food />
      <Footer />
    </div>
  );
}

export default App;
