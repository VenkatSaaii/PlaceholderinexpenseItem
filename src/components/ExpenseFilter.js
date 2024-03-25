import React from "react";
const ExpenseFilter=(props)=>{
    const dropdownhandler=(event)=>{
    props.onChangeHandler(event.target.value);
} 
return(
    <div className="expenses-filter">
        <div className="expenses-filter__control"></div>
        <label >Filter By Year</label>
        <select value={props.selected} onChange={dropdownhandler}></select>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">202</option>
        <option value="2019">2019</option>

    </div>
)
}
export default ExpenseFilter