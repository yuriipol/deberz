import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

import style from "./AuthPage.module.scss";

const getClassName = ({ isActive }) => {
  return isActive ? `${style.active} ${style.headerNav}` : style.headerNav;
};

const AuthPage = () => {
  return (
    <div className="container">
      <h1>POLUPAN AUTH</h1>
      <div>
        <NavLink to="login" className={getClassName}>
          Login
        </NavLink>

        <NavLink to="register" className={getClassName}>
          Register
        </NavLink>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
