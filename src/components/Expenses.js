import React from "react";

import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const filterExpenses = (selectedYear) => {
    if (!selectedYear) {
      return props.expenses;
    } else {
      return props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === selectedYear
      );
    }
  };
  
  const filteredExpenses = filterExpenses(props.selectedYear);

  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={props.selectedYear}
        onChangeFilter={props.onYearChange}
      />
     <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;





