import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Simulator from "./pages/Simulator/Simulator.jsx";
import Home from "./pages/Home/Home.jsx";
import { Container } from "./style";
import "./App.css";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/simulator" element={<Simulator />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
