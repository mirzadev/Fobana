import "./ActivityDropDownStyles.css";
import React, { useState } from "react";
import { EventDropDownMenu2 } from "../NavbarItems/MenuItems";
import { Link } from "react-router-dom";

function Dropdown2() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "activity-submenu clicked" : "activity-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {EventDropDownMenu2.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <li key={item.id}>
                <Link
                  to={item.url}
                  className={item.CName}
                  onClick={() => setDropdown(false)}
                >
                  {item.title}
                </Link>
              </li>
              {/* Add a divider after a certain item (e.g., after the 3rd item) */}
              {item.index < EventDropDownMenu2.length - 1 && (
                <hr className="dropdown-divider" />
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
}
export default Dropdown2;
