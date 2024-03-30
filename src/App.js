import "./App.css";
import "./styles/styles.css";
import { Navbar } from "./components/navbar.component";
import { Footer } from "./components/footer.component";
import { Home } from "./components/home.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./components/about.component";
import { Services } from "./components/services.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
