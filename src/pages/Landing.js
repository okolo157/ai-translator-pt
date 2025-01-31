import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
