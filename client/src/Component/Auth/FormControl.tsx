import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { FieldAttributes, Formik, useField } from "formik";
import { useContext, useState } from "react";
import { Ctx } from "../../Contexts/Context";
import { useDispatch } from "react-redux";
import { LoginUser, RegisterUser } from "../../redux/actions/User.action";

const MyTextField: React.FC<FieldAttributes<{ label: string }>> = ({
  label,
  type,
  ...props
}) => {
  const [field, meta] = useField(props);
  const ErrText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      variant="outlined"
      label={label}
      {...field}
      helperText={ErrText}
      error={!!ErrText}
      type={type}
      autoComplete="off"
    />
  );
};
export const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        passwordConfirm: "",
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, handleSubmit }) => {
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "91%" },
          }}
          onSubmitCapture={handleSubmit}
        >
          <TextField label="Username" type="input" name="username" />
          <TextField label="Password" type="password" name="password" />
          <TextField
            label="Confirm Password"
            type="password"
            name="passwordConfirm"
          />
          <Button
            sx={{
              width: "91%",
              m: 2,
              padding: "10px 0px",
              backgroundColor: "#2d3436",
            }}
            type="submit"
            disabled={isSubmitting}
          >
            Register
          </Button>
        </Box>;
      }}
    </Formik>
  );
};

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        setSubmitting(false);
      }}
    >
      {({ handleSubmit, values, isSubmitting }) => (
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: "91%" },
          }}
          onSubmitCapture={handleSubmit}
        >
          <MyTextField label="Username" name="username" type="input" />
          <MyTextField label="Password" type="password" name="password" />
          <Button
            sx={{
              width: "91%",
              m: 2,
              padding: "10px 0px",
              backgroundColor: "#2d3436",
            }}
            variant="contained"
            type="submit"
            disabled={isSubmitting}
          >
            Login
          </Button>
        </Box>
      )}
    </Formik>
  );
};
interface ErrText {
  isError: boolean;
  errTxt: string;
}
const FormControl = () => {
  const [errs, setErrs] = useState<ErrText>({
    isError: false,
    errTxt: "",
  });
  const dispatch = useDispatch();
  // const user = useSelector((state: { user: any }) => state.user);
  const { values, isLogin, handleChangeValue } = useContext(Ctx);
  const { username, password, passwordConfirm } = values;
  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!username || !password) {
      setErrs({
        isError: true,
        errTxt: "Information so weird!!!",
      });
      return;
    }
    if (!passwordConfirm) {
      localStorage.removeItem("user")
      dispatch(LoginUser(values));
    } else if (passwordConfirm !== password) {
      setErrs({
        isError: true,
        errTxt: "Information so weird!!!",
      });
      return;
    } else {
      localStorage.removeItem("user")
      dispatch(RegisterUser(values));
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "91%" },
      }}
      onSubmitCapture={submitForm}
    >
      <TextField
        label="Username"
        name="username"
        type="input"
        value={username}
        onChange={(e) => handleChangeValue(e)}
        error={errs.isError}
        onBlur={() => setErrs({ isError: false, errTxt: "" })}
        helperText={errs.isError && errs.errTxt ? errs.errTxt : null}
        autoComplete="off"
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={password}
        onBlur={() => setErrs({ isError: false, errTxt: "" })}
        onChange={(e) => handleChangeValue(e)}
        error={errs.isError}
        helperText={errs.isError && errs.errTxt ? errs.errTxt : null}
        autoComplete="off"
      />
      {isLogin ? (
        <Button
          sx={{
            width: "91%",
            m: 2,
            padding: "10px 0px",
            backgroundColor: "#2d3436",
          }}
          variant="contained"
          type="submit"
        >
          Login
        </Button>
      ) : (
        <>
          <TextField
            label="Confirm Password"
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            onBlur={() => setErrs({ isError: false, errTxt: "" })}
            onChange={(e) => handleChangeValue(e)}
            error={errs.isError}
            helperText={errs.isError && errs.errTxt ? errs.errTxt : null}
            autoComplete="off"
          />
          <Button
            sx={{
              width: "91%",
              m: 2,
              padding: "10px 0px",
              backgroundColor: "#2d3436",
            }}
            variant="contained"
            type="submit"
          >
            Register
          </Button>
        </>
      )}
    </Box>
  );
};
export default FormControl;
