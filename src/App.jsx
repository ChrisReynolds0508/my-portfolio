import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <nav>
        <NavLink to="/" style={linkStyle} end>
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink to="/about" style={linkStyle}>
          About
        </NavLink>{" "}
        |{" "}
        <NavLink to="/projects" style={linkStyle}>
          Projects
        </NavLink>{" "}
        |{" "}
        <NavLink to="/contact" style={linkStyle}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

const headerStyle = {
  padding: "1rem",
  backgroundColor: "#282c34",
  color: "white",
  textAlign: "center",
};

const linkStyle = ({ isActive }) => ({
  color: isActive ? "#61dafb" : "white",
  textDecoration: "none",
  margin: "0 0.5rem",
});
