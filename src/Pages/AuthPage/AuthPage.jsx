import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

import style from "./AuthPage.module.scss";

const getClassName = ({ isActive }) => {
  return isActive ? `${style.active} ${style.navigation}` : style.navigation;
};

const AuthPage = () => {
  return (
    <div className="container">
      <header>
        <div className={style.navContainer}>
          <NavLink to="login" className={getClassName}>
            Login
          </NavLink>

          <NavLink to="register" className={getClassName}>
            Sign in
          </NavLink>
          <Outlet />
        </div>
        <h1 className={style.title}> Welcome</h1>
        <div className={style.imgContainer}></div>
      </header>
    </div>
  );
};

export default AuthPage;
