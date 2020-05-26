import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import { SearchOutlined } from '@ant-design/icons';

const Header = (props) => {
  return (
    <header className={s.header}>
      
      <div className={s.logo}><img src={logo} /> Social Network</div>
      <div className={s.left_part_header}>
      <div className={s.search_block}>
      <SearchOutlined  style={{ fontSize: '16px', color: '#fff',  position: 'absolute', top: '5px', left: '5px' }}/>
      <input type="text" className={s.serach_input} placeholder="Search friends, photos, videos  "></input>
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
      </div>
    </header>
  );
};
export default Header;
