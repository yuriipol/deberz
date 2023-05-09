import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../Redux/auth/auth-selectors";
import { logOutOperation } from "../../Redux/auth/auth-operations";
import s from "./UserMenu.module.scss";

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logOutOperation());
  };
  const { email } = useSelector(getUser);
  return (
    <div className={s.containerLogOut}>
      <span className={s.userName}>{email}</span>
      <button onClick={onLogout} className={s.logout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
