import ButtonIcon from "components/ButtonIcon";
import { useForm } from "react-hook-form";
import { requestBackendLogin } from "util/requests";
import { saveAuthData } from "util/storage";
import { getTokenData } from "util/auth";
import { useContext } from "react";
import { AuthContext } from "AuthContext";

import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { setAuthContextData } = useContext(AuthContext);

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
      })
      .catch(() => {
        console.log("erro");
      });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("username")}
            type="text"
            className="form-control base-input"
            placeholder="Email"
            name="username"
          />{" "}
        </div>
        <div className="mb-2">
          <input
            {...register("password")}
            type="password"
            className="form-control base-input "
            placeholder="Password"
            name="password"
          />{" "}
        </div>
        <div className="login-submit">
          <ButtonIcon text="FAZER LOGIN" />
        </div>
      </form>
    </div>
  );
};

export default Login;