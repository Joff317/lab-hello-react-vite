import burgerMenu from "../../assets/menu-top-xs.png";
import logo from "../../assets/ironhack-logo-xs.png";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li className="left-item">
          {" "}
          <img src={logo} alt="ironhack logo" />
        </li>
        <li className="right-item">
          <img className="burger" src={burgerMenu} alt="menu top" />
        </li>
      </ul>
    </nav>
  );
}
