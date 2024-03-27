
import React from "react";

const ExpenseFilter = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  // List of years
  const years = [2022, 2021, 2020, 2019];

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropdownHandler}>
          {/* Display all the years in the dropdown */}
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;


