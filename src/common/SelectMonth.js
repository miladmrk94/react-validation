import React from "react";
import styles from "../Styles/SelectMonth.module.scss";
const SelectMonth = ({ formik, name, classErrors }) => {
  const selectMonthOptions = [
    {
      label: "Month",
      value: "",
    },
    {
      label: "January",
      value: "January",
    },
    {
      label: "February",
      value: "February",
    },
    {
      label: "March",
      value: "March",
    },
    {
      label: "April",
      value: "April",
    },
    {
      label: "May",
      value: "May",
    },
    {
      label: "June",
      value: "June",
    },
    {
      label: "July",
      value: "July",
    },
    {
      label: "August",
      value: "August",
    },
    {
      label: "September",
      value: "September",
    },
    {
      label: "October",
      value: "October",
    },
    {
      label: "November",
      value: "November",
    },
    {
      label: "December",
      value: "December",
    },
  ];

  return (
    <>
      <select
        className={styles.selectBoxMonth}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      >
        {selectMonthOptions.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <p className={classErrors}>{formik.errors[name]}</p>
      )}
    </>
  );
};

export default SelectMonth;
