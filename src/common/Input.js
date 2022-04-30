import React from "react";

const Input = ({
  formik,
  name,
  label,
  type = "text",
  holder,
  className,
  classErrors,
}) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "stretch",
        justifyContent: "center",
        margin: "2px",
        flexDirection: "column",
      }}
    >
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
        <p className={classErrors}>{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default Input;
