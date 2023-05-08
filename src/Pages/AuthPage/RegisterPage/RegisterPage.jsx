import RegisterForm from "../../../Component/RegisterForm/RegisterForm";
import { useDispatch } from "react-redux";
import { signUpOperation } from "../../../Redux/auth/auth-operations";
import { Navigate } from "react-router-dom";
import useAuth from "../../../Shared/hooks/useAuth";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onSignUp = (data) => {
    dispatch(signUpOperation(data));
  };
  const isLogin = useAuth();
  if (isLogin) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="container">
      <RegisterForm onSubmit={onSignUp} />
    </div>
  );
};

export default RegisterPage;
