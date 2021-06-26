import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

import logo from "../img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <Link to="/"><img className="logo" src={logo} alt="Logo strony" /></Link>
        <input type="text" className="search" />
        <ul>
          <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
