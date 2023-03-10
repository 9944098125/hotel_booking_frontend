import React, { Fragment, useState, useContext, useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/Actions/login";
import { useDispatch, useSelector } from "react-redux";
import AlertModal from "../Components/AlertModal";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const Alert = useSelector((state) => state.alert);
  const LoginDetails = useSelector((state) => state.auth);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
      dispatch(login(values));
    }
  };

  useEffect(() => {
    if (LoginDetails.token && LoginDetails.isAuthenticated) {
      navigate("/");
    }
  }, [LoginDetails.token, LoginDetails.isAuthenticated, navigate]);

  return (
    <Fragment>
      {Alert.message && <AlertModal show={true} />}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundImage:
            "url(https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?w=2000)",
        }}
      >
        {/* glass effect */}
        <Box
          sx={{
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "9px",
            boxShadow: "0 24px 40px rgba(0, 0, 0, 0.1)",
            backgroundFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            width: { xs: "90vw", md: "40vw" },
            height: { xs: "80vh", md: "65vh" },
            maxWidth: { xs: "100%", md: "40vw" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100vw", md: "40%" },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <Typography
              sx={{
                color: "#234e8e",
                fontSize: { xs: "25px", md: "1.875rem" },
                lineHeight: "2.25rem",
                fontWeight: "1000",
                letterSpacing: "-1px",
              }}
            >
              Sign In
            </Typography>
            <div className="form-section">
              <Formik
                initialValues={credentials}
                validate={(values) => validate(values)}
                onSubmit={(values) => callLoginApi(values)}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group">
                      <Box sx={{ mb: 2.5 }}>
                        <Typography
                          sx={{
                            color: "#234e8e",
                            fontSize: "15px",
                            fontWeight: "600",
                          }}
                        >
                          Your Email
                        </Typography>
                        <Field
                          type="text"
                          placeholder="jimmy@gmail.com"
                          className={
                            errors.email && touched.email
                              ? "is-invalid login-fields form-control"
                              : "login-fields form-control"
                          }
                          name="email"
                        />
                        {errors.email && touched.email && (
                          <Typography sx={{ color: "red", fontSize: "13px" }}>
                            {errors.email}
                          </Typography>
                        )}
                      </Box>
                    </div>
                    <div className="form-group">
                      <Box sx={{ mb: 2.5 }}>
                        <Typography
                          sx={{
                            color: "#234e8e",
                            fontSize: "15px",
                            fontWeight: "600",
                          }}
                        >
                          Your Password
                        </Typography>
                        <Box
                          sx={{
                            maxWidth: { xs: "200px", md: "350px" },
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Field
                              type={showPassword ? "text" : "password"}
                              placeholder="JimmyWalen@10"
                              className={
                                errors.password && touched.password
                                  ? "form-control is-invalid login-fields"
                                  : "form-control login-fields"
                              }
                              name="password"
                              style={{ borderRight: "none" }}
                            />
                            {showPassword ? (
                              <div className="eye">
                                <VisibilityOff
                                  sx={{ cursor: "pointer" }}
                                  onClick={toggleShowPassword}
                                />
                              </div>
                            ) : (
                              <div className="eye">
                                <Visibility
                                  sx={{ cursor: "pointer" }}
                                  onClick={toggleShowPassword}
                                />
                              </div>
                            )}
                          </Box>
                          {errors.password && touched.password && (
                            <Typography sx={{ color: "red", fontSize: "13px" }}>
                              {errors.password}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </div>
                    <div className="hoverParent">
                      <button type="submit" className="primary-button">
                        {LoginDetails.loading && (
                          <CircularProgress
                            sx={{ height: "10px", width: "10px" }}
                          />
                        )}
                        Login
                      </button>
                      <Link
                        to="/register"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <button className="register-button" type="button">
                          Register
                        </button>
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}

export default Login;
