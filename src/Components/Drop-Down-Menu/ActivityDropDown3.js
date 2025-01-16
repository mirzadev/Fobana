import "./ActivityDropDownStyles.css";
import React, { useState } from "react";
import { EventDropDownMenu3 } from "../NavbarItems/MenuItems";
import { Link } from "react-router-dom";

function Dropdown3() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "activity-submenu clicked" : "activity-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {EventDropDownMenu3.map((item) => {
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
export default Dropdown3;
