import React, { useState } from "react";
import Fobana_Logo from "../../Assets/Cover/Fobana_Logo.png";
import "./NavbarStyles.css";
import { MenuItems, MenuItems1, MenuItems2, MenuItems3 } from "./MenuItems";
import { Link } from "react-router-dom";
import Dropdown from "../Drop-Down-Menu/ActivityDropDown";
import Dropdown1 from "../Drop-Down-Menu/ActivityDropDown1";
import Dropdown2 from "../Drop-Down-Menu/ActivityDropDown2";
import Dropdown3 from "../Drop-Down-Menu/ActivityDropDown3";

function Navbar() {
  {
    const [dropdown, setDropdown] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [clicked, setClicked] = useState(false);
    return (
      <nav className="NavbarItems">
        <Link data-testid="link" to="/">
          <span>
            <img id="Fobana_logo" src={Fobana_Logo}></img>
          </span>
        </Link>

        <div className="menu-icons" onClick={() => setClicked(!clicked)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            if (item.title === "About Us") {
              return (
                <li
                  key={item.id}
                  className={item.CName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link id="activity-menu" to={item.url}>
                    <i className={item.icon}></i> {item.title}
                    <i className={item.ddIcon} id="activity-drop-menu"></i>
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }

            return (
              <li key={index}>
                <Link className={item.CName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                  <i className={item.ddIcon}></i>
                </Link>
              </li>
            );
          })}
          {MenuItems1.map((item, index) => {
            if (item.title === "Membership") {
              return (
                <li
                  key={item.id}
                  className={item.CName}
                  onMouseEnter={() => setDropdown1(true)}
                  onMouseLeave={() => setDropdown1(false)}
                >
                  <Link id="activity-menu" to={item.url}>
                    <i className={item.icon}></i> {item.title}
                    <i className={item.ddIcon} id="activity-drop-menu"></i>
                  </Link>
                  {dropdown1 && <Dropdown1 />}
                </li>
              );
            }

            return (
              <li key={index}>
                <Link className={item.CName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                  <i className={item.ddIcon}></i>
                </Link>
              </li>
            );
          })}
          {MenuItems2.map((item, index) => {
            if (item.title === "Convention") {
              return (
                <li
                  key={item.id}
                  className={item.CName}
                  onMouseEnter={() => setDropdown2(true)}
                  onMouseLeave={() => setDropdown2(false)}
                >
                  <Link id="activity-menu" to={item.url}>
                    <i className={item.icon}></i> {item.title}
                    <i className={item.ddIcon} id="activity-drop-menu"></i>
                  </Link>
                  {dropdown2 && <Dropdown2 />}
                </li>
              );
            }

            return (
              <li key={index}>
                <Link className={item.CName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                  <i className={item.ddIcon}></i>
                </Link>
              </li>
            );
          })}
          {MenuItems3.map((item, index) => {
            if (item.title === "Multimedia") {
              return (
                <li
                  key={item.id}
                  className={item.CName}
                  onMouseEnter={() => setDropdown3(true)}
                  onMouseLeave={() => setDropdown3(false)}
                >
                  <Link id="activity-menu" to={item.url}>
                    <i className={item.icon}></i> {item.title}
                    <i className={item.ddIcon} id="activity-drop-menu"></i>
                  </Link>
                  {dropdown3 && <Dropdown3 />}
                </li>
              );
            }

            return (
              <li key={index}>
                <Link className={item.CName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                  <i className={item.ddIcon}></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
