import React from "react";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import HomeIcon from "@mui/icons-material/Home";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li>
            <NavLink title="Home" to="/" activeClassName="active">
              <HomeIcon />
            </NavLink>
          </li>
          <li>
            <NavLink
              title="Cryptocurrency"
              to="/cryptocurrency"
              activeClassName="active"
            >
              <CurrencyBitcoinIcon />
            </NavLink>
          </li>
          <li>
            <NavLink title="Nasa" to="/nasa" activeClassName="active">
              <RocketLaunchIcon />
            </NavLink>
          </li>
          <li>
            <NavLink title="Covid" to="/covid" activeClassName="active">
              <CoronavirusIcon />
            </NavLink>
          </li>
          <li>
            <NavLink title="Product" to="/product" activeClassName="active">
              <LocalMallIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
