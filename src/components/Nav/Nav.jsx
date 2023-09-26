import React from 'react';
import s from './Nav.module.css';
import './Nav.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {

  const location = useLocation();
  console.log(location);
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/Profile" className={location.pathname==="/Profile"? s.active : " " } >Profile</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to="/Messages" className={location.pathname==="/Messages"? s.active : " "}> Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/News" className={location.pathname==="/News"? s.active : " "}> News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Music" className={location.pathname==="/Music"? s.active : " "}> Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to= "/Settings" className={location.pathname==="/Settings"? s.active : " "}> Settings</NavLink>
      </div>
    </nav>
  );
}
export default Nav;