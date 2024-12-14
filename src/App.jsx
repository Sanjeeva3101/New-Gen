import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Services from "./components/Services/Services";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useRef } from "react";

function App() {
  const servicesRef = useRef(null);
  const valueRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToServices = () =>
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToValue = () =>
    valueRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact = () =>
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToFooter = () =>
    footerRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header></Header>
        <Hero></Hero>
      </div>
      <Services></Services>
      <Value></Value>
      <Contact></Contact>
      <Footer></Footer>
      {/* <HashRouter>
        <Route path='service' element={<Service/>}></Route>
      </HashRouter> */}
    </div>
  );
}

export default App;
