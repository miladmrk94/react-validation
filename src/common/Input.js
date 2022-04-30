import React from "react";

const Input = ({ formik, name, label, type = "text" }) => {
  return (
    <div>
      <input
        id={name}
        name={name}
        type={type}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values[name]}
      />
      <label htmlFor={name}>{label}</label>
      {formik.errors[name] && formik.touched[name] && (
        <div>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
