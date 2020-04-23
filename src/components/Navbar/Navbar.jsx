import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.navitem}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.navitem}>
        <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={s.navitem}>
        <NavLink to="/news" activeClassName={s.active}>News</NavLink>
      </div>
      <div className={s.navitem}>
        <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
      </div>
      <div className={s.navitem}>
        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
      </div>
      <div className={s.navitem}>
        <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
