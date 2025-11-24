import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  // Function to render correct arrow (▼ or ▲)
  const arrow = (path) => (location.pathname === path ? "▲" : "▼");

  return (
    <nav className="navbar">

      {/* TOP BAR */}
      <div className="navbar-top">

        <div className="navbar-left">
          <img src="/logo.png" alt="Logo" className="logo-img" />
          <span className="company-name">Layali Elqahera Company</span>
        </div>

        <div className="navbar-right">
            <span className="currency">USD ▼</span>
            <span className="lang">Arabic</span>
            <span className="login">Login</span>
            <span className="reservation">My reservation</span>

            <div className="phone-box">
                <span className="phone">+201116001003</span>
                <img src="/wa.png" alt="WhatsApp" className="wa-icon" />
            </div>
        </div>


      </div>

      {/* BOTTOM MENU BAR */}
      <div className="navbar-bottom">

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "bottom-item active" : "bottom-item"
          }
        >
          About Layali Elqahera Company {arrow("/about")}
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "bottom-item active" : "bottom-item"
          }
        >
          Services {arrow("/services")}
        </NavLink>

        <NavLink
          to="/captains"
          className={({ isActive }) =>
            isActive ? "bottom-item active" : "bottom-item"
          }
        >
          Company captains {arrow("/captains")}
        </NavLink>

        <NavLink
          to="/trips"
          className={({ isActive }) =>
            isActive ? "bottom-item active" : "bottom-item"
          }
        >
          Trips and offers {arrow("/trips")}
        </NavLink>

      </div>

    </nav>
  );
}
