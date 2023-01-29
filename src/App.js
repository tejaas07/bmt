import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Products/Products";
import Contact from "./Pages/Contact Us/ContactUs";
import About from "./Pages/About Us/AboutUs";
import NV from "./Components/NavBar/NV";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NV />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/contactUs" element={<Contact />} />
        <Route exact path="/AboutUs" element={<About />} />
      </Routes>
      <Footer />
      {/* <NavigationBar /> */}
      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
