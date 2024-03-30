import "./App.css";
import "./styles/styles.css";
import "./components/navbar.component";
import { Navbar } from "./components/navbar.component";
import { Footer } from "./components/footer.component";
import { Home } from "./components/home.component";
import { Contact } from "./components/contact.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
