import "./App.css";
// import TranslateComponent from "./components/TranslateComponent";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Pricing from "./pages/Pricing";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
