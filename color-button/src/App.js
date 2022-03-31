import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ColorBtn from "./components/ColorBtn";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/color-btn" element={<ColorBtn />} />
      </Routes>
    </Router>
  );
};

export default App;
