import React, { Fragment, useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ReactFlagsSelect from "react-flags-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import {
  GlassEffect,
  GlassEffectUpperPart,
  Linked,
  LoginContainer,
  Options,
  SignInHead,
  SubmitButton,
  TotalGlassContainer,
} from "./styledComponents";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/Actions/register";
import AlertModal from "../Components/AlertModal";

function SignUp() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
    city: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState("");
  const [code, setCode] = useState("");
  const [validateCountry, setValidateCountry] = useState(false);
  const [url, setUrl] = useState("");

  const Alert = useSelector((state) => state.alert);
  const Registration = useSelector((state) => state.register);

  const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (isNaN(values.email)) {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        //eslint-disable-line
        errors.email = "Email is invalid";
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
        "Password must 8 characters long with at least one Capital letter, one number and one special character";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Your Password";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password and Confirm Password are not matching";
    }
    if (!values.city) {
      errors.city = "City is required";
    }
    return errors;
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onChange = (value, data, event, formattedValue) => {
    setValue(value);
    setCode(data.dialCode);
  };

  const onImageChange = (image) => {
    if (image === undefined) {
      return;
    }
    if (
      image.type === "image/jpeg" ||
      "image/jpg" ||
      "image/png" ||
      "image/svg"
    ) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "projects");
      data.append("cloud_name", "dakda5ni3");
      fetch("https://api.cloudinary.com/v1_1/dakda5ni3/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setUrl(data.url);
          console.log(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  const callRegisterApi = (values) => {
    if (selected === "" || value === "") {
      return;
    }
    const data = {
      username: values.firstName + " " + values.lastName,
      email: values.email,
      phoneNumber: value,
      country: selected,
      password: values.password,
      city: values.city,
      profilePicture: url,
    };
    console.log("url", url);
    dispatch(register(data));
  };

  useEffect(() => {
    if (Alert.type === "success") {
      setTimeout(() => {
        Navigate("/login");
      }, 3000);
    }
  }, [Alert, Navigate]);

  return (
    <Fragment>
      <LoginContainer style={{ paddingLeft: "10%" }}>
        {Alert.message && <AlertModal show={true} />}
        <TotalGlassContainer reg>
          <GlassEffectUpperPart>
            <div className="d-flex align-items-center">
              <Options fs="16px">
                <Linked
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "grey",
                    cursor: "not-allowed",
                  }}
                >
                  Sign Up
                </Linked>
              </Options>
              <Options fs="16px">
                <Linked to="/login">Sign In</Linked>
              </Options>
            </div>
          </GlassEffectUpperPart>
          <GlassEffect>
            <div className="d-flex align-items-center justify-content-center">
              <SignInHead>Sign In</SignInHead>
            </div>
            <div className="form-section mt-4">
              <Formik
                initialValues={initialValues}
                validate={(values) => validate(values)}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values) => {
                  callRegisterApi(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="row">
                      <div className="col-md">
                        <div className="form-group mb-4">
                          {/* first name */}
                          <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                            className={
                              errors.firstName && touched.firstName
                                ? "form-control primary-input-field is-invalid"
                                : "form-control primary-input-field"
                            }
                          />
                          {touched.firstName && errors.firstName ? (
                            <div className="invalid-feedback">
                              {errors.firstName}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-md">
                        <div className="form-group mb-4">
                          {/* last name */}
                          <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter Your last name"
                            className={
                              errors.lastName && touched.lastName
                                ? "form-control primary-input-field is-invalid"
                                : "form-control primary-input-field"
                            }
                          />
                          {touched.lastName && errors.lastName ? (
                            <div className="invalid-feedback">
                              {errors.lastName}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md">
                        <div className="form-group mb-4">
                          {/* email */}
                          <Field
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            className={
                              errors.email && touched.email
                                ? "form-control primary-input-field is-invalid"
                                : "form-control primary-input-field"
                            }
                          />
                          {touched.email && errors.email ? (
                            <div className="invalid-feedback">
                              {errors.email}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group mb-4">
                          {/* phone number */}
                          <PhoneInput
                            country={"gb"}
                            isValid={(value) => {
                              if (value.match(/^(?![\s\S])/)) {
                                return "Phone number is required";
                              } else {
                                return true;
                              }
                            }}
                            value={value}
                            onChange={onChange}
                            placeholder={"Enter your phone number"}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md">
                        <div className="form-group mb-4">
                          <div className="input-group">
                            {/* password */}
                            <Field
                              type={showPassword ? "text" : "password"}
                              id="password"
                              name="password"
                              placeholder="Enter your password"
                              className={
                                errors.password && touched.password
                                  ? "form-control primary-input-field is-invalid pass"
                                  : "form-control primary-input-field pass"
                              }
                            />
                            <span
                              className="input-group-text"
                              id="basic-addon2"
                              onClick={toggleShowPassword}
                            >
                              {showPassword ? (
                                <VisibilityIcon
                                  fontSize="small"
                                  className="iconColor"
                                />
                              ) : (
                                <VisibilityOffIcon
                                  fontSize="small"
                                  className="iconColor"
                                />
                              )}
                            </span>
                            {touched.password && errors.password ? (
                              <div className="invalid-feedback">
                                {errors.password}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="col-md">
                        <div className="form-group mb-4">
                          <div className="input-group">
                            {/* confirm-password */}
                            <Field
                              type={showConfirmPassword ? "text" : "password"}
                              id="confirmPassword"
                              name="confirmPassword"
                              placeholder="Re-enter your password"
                              className={
                                errors.confirmPassword &&
                                touched.confirmPassword
                                  ? "form-control primary-input-field is-invalid pass"
                                  : "form-control primary-input-field pass"
                              }
                            />
                            <span
                              className="input-group-text"
                              id="basic-addon2"
                              onClick={toggleShowConfirmPassword}
                            >
                              {showConfirmPassword ? (
                                <VisibilityIcon
                                  fontSize="small"
                                  className="iconColor"
                                />
                              ) : (
                                <VisibilityOffIcon
                                  fontSize="small"
                                  className="iconColor"
                                />
                              )}
                            </span>
                            {touched.confirmPassword &&
                            errors.confirmPassword ? (
                              <div className="invalid-feedback">
                                {errors.confirmPassword}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-4">
                      <div className="col-md-6 me-5">
                        <div className="demo-wrapper">
                          {/* country */}
                          <ReactFlagsSelect
                            selected={selected}
                            onSelect={(code) => setSelected(code)}
                            searchable={true}
                          />
                        </div>
                        {validateCountry && (
                          <div className="invalid-feedback">
                            Country is required
                          </div>
                        )}
                      </div>
                      <input
                        type="file"
                        onChange={(e) => onImageChange(e.target.files[0])}
                      />
                    </div>

                    <div className="d-flex flex-column align-items-center mb-4">
                      <Field
                        name="city"
                        className={
                          errors.city && touched.city
                            ? "form-control primary-input-field is-invalid"
                            : "form-control primary-input-field"
                        }
                        type="text"
                        placeholder="Enter your city"
                      />
                      {touched.city && errors.city && (
                        <div className="invalid-feedback">{errors.city}</div>
                      )}
                    </div>

                    <div className="form-group text-center mb-2">
                      <SubmitButton type="submit">
                        {Registration.loading && (
                          <CircularProgress sx={{ height: "20px" }} />
                        )}
                        Register
                      </SubmitButton>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </GlassEffect>
        </TotalGlassContainer>
      </LoginContainer>
    </Fragment>
  );
}
export default SignUp;
