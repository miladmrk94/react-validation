import React from "react";

const Input = ({ formik, name, label, type = "text", holder, className }) => {
  return (
    <div>
      <input
        className={className}
        id={name}
        name={name}
        type={type}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values[name]}
        placeholder={holder}
      />
      <label htmlFor={name}>{label}</label>
      {formik.errors[name] && formik.touched[name] && (
        <div>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
