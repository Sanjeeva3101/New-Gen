import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Services from "./components/Services/Services";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Footer from "./components/Footer/Footer";
import { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/pages/Service/Service" element={<Service></Service>} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
