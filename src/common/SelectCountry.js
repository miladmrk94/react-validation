import React from "react";
import countryList from "./CountryList";

const SelectCountry = ({ formik, name }) => {
  return (
    <>
      <select onChange={formik.handleChange} name={name}>
        {countryList.map((i) => {
          return (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          );
        })}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div>{formik.errors[name]}</div>
      )}
    </>
  );
};

export default SelectCountry;
