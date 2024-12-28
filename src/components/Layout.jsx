import { Outlet, Link } from "react-router-dom";
import Logo from "../images/logo.webp";

const Layout = () => {
  return (
    <>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo and Title */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={Logo}
              alt="SavorAI Logo"
              className="me-2"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
            <span className="fw-bold">SavorAI</span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                ></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
