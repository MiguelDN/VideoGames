import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-brand" to="/PlayerForm">
              Add player
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
