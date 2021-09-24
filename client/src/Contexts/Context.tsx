import { createContext, useState } from "react";

export const Ctx = createContext<any>({});

const ContextProvider: React.FC = ({ children }) => {
  const [isLogin, setIslogin] = useState<boolean>(true);
  const [values, setValues] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const handleChangeValue = (e: { target: { name: any; value: any } }) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const checkLogin = () => {
    setIslogin(!isLogin);
    setValues({ username: "", password: "", passwordConfirm: "" });
  };

  const context = {
    values,
    isLogin,
    checkLogin,
    handleChangeValue,
  };
  return <Ctx.Provider value={context}>{children}</Ctx.Provider>;
};
export default ContextProvider;
