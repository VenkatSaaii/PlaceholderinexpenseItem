import React from "react";

const ExpenseFilter = (props) => {
    const dropdownHandler = (event) => {
      try {
        // Update the selected year state by calling the onChange function passed as props
        props.onChange(event.target.value);
      } catch (error) {
        console.error("Error in dropdownHandler:", error);
      }
    };
  
  
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected}onChange={dropdownHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};


export default ExpenseFilter;