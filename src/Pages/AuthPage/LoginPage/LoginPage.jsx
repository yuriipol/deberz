import { useDispatch } from "react-redux";
import { loginOperation } from "../../../Redux/auth/auth-operations";
import { Navigate } from "react-router-dom";
import LoginForm from "../../../Component/LoginForm/LoginForm";
// import { auth } from "../../../Shared/firebase/config";
// import { onAuthStateChanged } from "firebase/auth";
import useAuth from "../../../Shared/hooks/useAuth";

const LoginPage = () => {
  ///* проверка пользователя в firebase (online или нет) */
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     return console.log(user);
  //   }
  //   return console.log("user not online");
  // });
  const dispatch = useDispatch();
  const onLogin = (data) => {
    dispatch(loginOperation(data));
  };
  const isLogin = useAuth();
  if (isLogin) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="container">
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
