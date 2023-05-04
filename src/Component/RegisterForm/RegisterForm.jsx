import { useState } from "react";
import TextField from "../TextField/TextField";
import { fields } from "../TextField/fields";
import s from "./RegisterForm.module.scss";

const RegisterForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hendleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const hendleSubmit = (event) => {
    event.preventDefault();
    const dataUser = {
      name,
      email,
      password,
    };

    onSubmit(dataUser);

    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={hendleSubmit}>
      <TextField value={name} onChange={hendleInputChange} {...fields.name} />
      <TextField value={email} onChange={hendleInputChange} {...fields.email} />
      <TextField
        value={password}
        onChange={hendleInputChange}
        {...fields.password}
      />
      <button type="submit" className={s.registerButton}>
        Register user
      </button>
    </form>
  );
};

export default RegisterForm;
