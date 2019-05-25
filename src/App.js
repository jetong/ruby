import React from "react";

import Header from "./components/Header";
import Story from "./components/Story";
import Food from "./components/Food";
import Testimonials from "./components/Testimonials";
import Art from "./components/Art";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Story />
      <Food />
      {/* <Testimonials /> */}
      <Art />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
