import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <nav role="navigation">
      <NavLink to="/" exact="true" style={({ isActive }) => isActive ? { fontweight: "bold"} : null}>Home</NavLink>
      <NavLink to="/directors" style={({ isActive }) => isActive ? { fontweight: "bold"} : null}>Directors</NavLink>
      <NavLink to="/actors" style={({ isActive }) => isActive ? {fontweight: "bold"} : null}>Actors</NavLink>
      </nav>
    </div>
    );
};

export default NavBar;
