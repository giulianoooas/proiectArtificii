// import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container px-5">
        <div>
          {/* <img src="./assets/logo.png" alt="logo" class="logo-image" /> */}
          {/* <Link to="/"> */}
          <span class="navbar-brand">Sky firework</span>
          {/* </Link> */}
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              {/* <Link to="/"> */}
              <span
                class="nav-link active"
                aria-current="page"
                onclick="renderPageById('home')"
              >
                Home
              </span>
              {/* </Link> */}
            </li>
            <li class="nav-item">
              <span class="nav-link">About</span>
            </li>
            <li class="nav-item">
              {/* <Link to="/contact"> */}
              <span class="nav-link">Contact</span>
              {/* </Link> */}
            </li>
            <li class="nav-item">
              <span class="nav-link">Services</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
