import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <div>
          {/* <img src="./assets/logo.png" alt="logo" className="logo-image" /> */}
          <Link to="/">
            <span className="navbar-brand">Sky firework</span>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link">About</span>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <span className="nav-link">Contact</span>
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link">Services</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
