import "./ActivityDropDownStyles.css";
import React, { useState } from "react";
import { EventDropDownMenu1 } from "../NavbarItems/MenuItems";
import { Link } from "react-router-dom";

function Dropdown1() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "activity-submenu clicked" : "activity-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {EventDropDownMenu1.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.url}
                className={item.CName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Dropdown1;
