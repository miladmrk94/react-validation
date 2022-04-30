import React from "react";

const RadioInput = ({ formik, name, value, label }) => {
  return (
    <div>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        checked={formik.values.gender === value}
      />
      <label>{label}</label>
    </div>
  );
};

export default RadioInput;
