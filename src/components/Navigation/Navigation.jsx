import { Link, NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import clsx from "clsx";

import logo from "../../assets/logo.svg";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <div className={style.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className={style.navigationMenu}>
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(style.navLink, isActive && style.navLinkActive)
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              clsx(style.navLink, isActive && style.navLinkActive)
            }
            to="/catalog"
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
