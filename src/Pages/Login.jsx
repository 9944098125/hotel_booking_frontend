import React, { Fragment, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";

import { loginAction } from "../Redux/Actions/loginAction";

function Login() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const LoginDetails = useSelector((state) => state.auth);

  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (isNaN(values.email)) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        //eslint-disable-line
        errors.email = "Email is invalid !";
      }
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/.test(
        //eslint-disable-line
        values.password
      )
    ) {
      errors.password =
        "Password must have 8 characters with at least one capital letter, one number and one special character...";
    }
    return errors;
  };

  const callLoginApi = (values) => {
    if (values) {
      dispatch(loginAction(values));
    }
  };

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {/* glass effect */}
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "9px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backgroundFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <Formik
            initialValues={credentials}
            validate={(values) => validate(values)}
            onSubmit={(values) => callLoginApi(values)}
          >
            {({ errors, touched }) => (
              <Form>
                <Box sx={{ width: "100%", mb: 2 }}>
                  <Field
                    name="email"
                    className={
                      errors.email && touched.email
                        ? "login-fields red-fields"
                        : "login-fields"
                    }
                    type="text"
                    placeholder="Enter your Email"
                  />
                </Box>
                <Box sx={{ width: "100%", mb: 2 }}>
                  <Field
                    name="password"
                    className={
                      errors.password && touched.password
                        ? "login-fields red-fields"
                        : "login-fields"
                    }
                    type="text"
                    placeholder="Enter your Password"
                  />
                </Box>
                <Button
                  sx={{ backgroundColor: "primary.dark", color: "white" }}
                  type="submit"
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>{" "}
        </Box>
      </Box>
    </Fragment>
  );
}

export default Login;
