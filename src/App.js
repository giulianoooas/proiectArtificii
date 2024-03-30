import "./App.css";
import "./styles/styles.css";
import "./components/navbar.component";
import { Navbar } from "./components/navbar.component";
import { Footer } from "./components/footer.component";
import { Home } from "./components/home.component";
import { Contact } from "./components/contact.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/about.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
