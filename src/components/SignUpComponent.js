import React, { useState } from "react";
import styles from "../Styles/SignUpComponent.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "../common/Input";
import SelectMonth from "../common/SelectMonth";
import RadioInput from "../common/RadioInput";
import SelectCountry from "../common/SelectCountry";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignUpComponent = () => {
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPasConfirm] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    year: "",
    month: "",
    day: "",
    gender: "",
    country: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Please enter the required field")

      .min(3, "the first name must be last 3 characters"),
    lastName: Yup.string().required("Please enter the required field"),
    year: Yup.string()
      .matches(/^(19|20)\d{2}$/, "Is Invalid")
      .required("Year is required"),
    month: Yup.string().required("Month is required"),
    day: Yup.string()
      .required("Day is required")
      .matches(/^(0?[1-9]|1[0-9]|2[0-9]|3[0-1])$/, "Is Invalid"),
    gender: Yup.string().required("Please Select the gender"),
    country: Yup.string().required("Please Select the country's"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^(\+98|0)?9\d{9}$/, "Is Invalid"),
    password: Yup.string()
      .required("Please Enter your password")
      .min(5, "Your password must be longer than 5 characters.")
      .max(25)
      .matches(/^(?=.{6,})/, "Must Contain 6 Characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])/,
        "Must Contain One Uppercase, One Lowercase"
      )
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "Must Contain One Special Case Character"
      )
      .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number"),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => console.log(values),
    validationSchema,
  });
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <div className={styles.nameBox}>
          <Input
            className={styles.input}
            formik={formik}
            name="firstName"
            holder="First Name"
            classErrors={styles.errors}
          />
          <Input
            className={styles.input}
            formik={formik}
            name="lastName"
            holder="Last Name"
            classErrors={styles.errors}
          />
        </div>
        <div className={styles.birthdayBox}>
          <div>
            {" "}
            <SelectMonth
              classErrors={styles.errors}
              formik={formik}
              name="month"
              label="Month"
            />
          </div>
          <Input
            className={styles.input}
            type="number"
            formik={formik}
            name="day"
            holder="Day"
            classErrors={styles.errors}
          />
          <Input
            className={styles.input}
            type="number"
            formik={formik}
            name="year"
            holder="Year"
            classErrors={styles.errors}
          />
        </div>
        <div className={styles.radioBox}>
          <RadioInput formik={formik} name="gender" value="male" label="Male" />
          <RadioInput
            formik={formik}
            name="gender"
            value="female"
            label="Female"
          />
          {formik.errors.gender && formik.touched.gender && (
            <p className={styles.errors}>{formik.errors.gender}</p>
          )}
        </div>

        <div className={styles.phoneBox}>
          <SelectCountry
            formik={formik}
            name="country"
            classErrors={styles.errorCountry}
          />
          <Input
            className={styles.input}
            formik={formik}
            type="number"
            name="phoneNumber"
            holder="Phone Number"
            classErrors={styles.errors}
          />
        </div>
        <div className={styles.passBox}>
          <div className={styles.password}>
            <Input
              className={styles.input}
              formik={formik}
              type={showPass ? "text" : "password"}
              name="password"
              holder="Password"
              classErrors={styles.errors}
            />
            <div
              type="button"
              className={styles.eye}
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FiEyeOff size="18px" /> : <FiEye size="18px" />}
            </div>
          </div>
          <div className={styles.passwordConfirm}>
            <Input
              className={styles.input}
              formik={formik}
              type={showPassConfirm ? "text" : "password"}
              name="passwordConfirm"
              holder="Password Confirm"
              classErrors={styles.errors}
            />
            <div
              type="button"
              className={styles.eyeConfirm}
              onClick={() => setShowPasConfirm(!showPassConfirm)}
            >
              {showPassConfirm ? (
                <FiEyeOff size="18px" />
              ) : (
                <FiEye size="18px" />
              )}
            </div>
          </div>
        </div>
        <button className={styles.SingUp} type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUpComponent;
