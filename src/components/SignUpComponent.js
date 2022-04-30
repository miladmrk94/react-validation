import React, { useState } from "react";
import styles from "../Styles/SignUpComponent.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "../common/Input";
import SelectMonth from "../common/SelectMonth";
import RadioInput from "../common/RadioInput";
import SelectCountry from "../common/SelectCountry";

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
      .required("Please enter the birthday year"),
    month: Yup.string().required("Please Select the birthday Month"),
    day: Yup.string()
      .required("Please enter the birthday day")
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
          />
          <Input
            className={styles.input}
            formik={formik}
            name="lastName"
            holder="Last Name"
          />
        </div>
        <div className={styles.birthdayBox}>
          <div>
            {" "}
            <SelectMonth formik={formik} name="month" label="Month" />
          </div>
          <Input
            className={styles.input}
            type="number"
            formik={formik}
            name="day"
            holder="Day"
          />
          <Input
            className={styles.input}
            type="number"
            formik={formik}
            name="year"
            holder="Year"
          />
        </div>
        <div>
          <h3>Gender</h3>
          <RadioInput formik={formik} name="gender" value="male" label="Male" />
          <RadioInput
            formik={formik}
            name="gender"
            value="female"
            label="Female"
          />
          {formik.errors.gender && formik.touched.gender && (
            <div>{formik.errors.gender}</div>
          )}
        </div>
        <div>
          <SelectCountry formik={formik} name="country" />
        </div>
        <div>
          <Input
            className={styles.input}
            formik={formik}
            type="number"
            name="phoneNumber"
            holder="Phone Number"
          />
        </div>
        <div>
          <Input
            className={styles.input}
            formik={formik}
            type={showPass ? "text" : "password"}
            name="password"
            holder="Password"
          />
          <button type="button" onClick={() => setShowPass(!showPass)}>
            Show
          </button>

          <Input
            className={styles.input}
            formik={formik}
            type={showPassConfirm ? "text" : "password"}
            name="passwordConfirm"
            holder="Password Confirm"
          />
          <button
            type="button"
            onClick={() => setShowPasConfirm(!showPassConfirm)}
          >
            show
          </button>
        </div>
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUpComponent;
