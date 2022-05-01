import React from "react";
import styles from "../Styles/RadioInput.module.scss";

const RadioInput = ({ formik, name, value, label }) => {
  return (
    <div>
      <label className={styles.radioOne}>
        <input
          type="radio"
          name={name}
          value={value}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.gender === value}
        />

        <span>{label}</span>
      </label>
    </div>
  );
};

export default RadioInput;
