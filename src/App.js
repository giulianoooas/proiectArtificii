import "./App.css";
import "./styles/styles.css";
import { Navbar } from "./components/navbar.component";
import { Footer } from "./components/footer.component";
import { Home } from "./components/home.component";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { About } from "./components/about.component";
import { Services } from "./components/services.component";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
