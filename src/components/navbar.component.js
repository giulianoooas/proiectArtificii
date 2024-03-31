import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../styles/navbar.component.css";
import logo from "../assests/logoPar.png";

export const Navbar = () => {
  const location = useLocation();
  let currentPath = location.pathname;

  const paths = {
    home: "/",
    about: "/about",
    services: "/services",
  };
  const pageClasses = {
    home: "nav-link",
    about: "nav-link",
    services: "nav-link",
  };

  const putClasses = () => {
    for (const pageName of Object.keys(pageClasses)) {
      let className = "nav-link";

      if (currentPath === paths[pageName]) {
        className = `${className} active`;
      }

      pageClasses[pageName] = className;
    }
  };
  putClasses();

  useEffect(() => {
    currentPath = location.pathname;
    putClasses();
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <div>
          <img src={logo} alt="logo" className="logo-image" />
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
                <span className={pageClasses["home"]}>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <span className={pageClasses["about"]}>About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services">
                <span className={pageClasses["services"]}>Services</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
