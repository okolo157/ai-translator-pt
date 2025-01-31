import "./App.css";
import TranslateComponent from "./components/TranslateComponent";
// import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TranslateComponent />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
