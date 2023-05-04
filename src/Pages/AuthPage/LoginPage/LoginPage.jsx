// import { useDispatch } from "react-redux";
// import { login } from "redux/auth/auth-operations";
// import { Navigate } from "react-router-dom";
import LoginForm from "../../../Component/LoginForm/LoginForm";
// import useAuth from "../../Shared/hooks/useAuth";

const LoginPage = () => {
  // const dispatch = useDispatch();
  const onLogin = (data) => {
    // dispatch(login(data));
  };
  // const isLogin = useAuth();
  // if (isLogin) {
  //   return <Navigate to="/home" />;
  // }
  return (
    <div className="container">
      <LoginForm onSubmit={onLogin} />
    </div>
  );
};

export default LoginPage;
