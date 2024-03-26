// import React from "react";
// import ExpenseItem from "./ExpenseItem";
// import "./Expenses.css";
// import Card from "./Card";
// import ExpenseFilter from "./ExpenseFilter";

// function Expenses(props) {
//   const filterExpenses = (selectedYear) => {
//     if (!selectedYear) {
//       return props.expenses;
//     } else {
//       return props.expenses.filter(
//         (expense) => expense.date.getFullYear().toString() === selectedYear
//       );
//     }
//   };

//   const onFilterChange = (selectedYear) => {
//     props.onYearChange(selectedYear);
//   };

//   return (
//     <Card className="expenses">
//       <ExpenseFilter
//         selected={props.selectedYear}
//         onChangeFilter={onFilterChange}
//       />
//       {filterExpenses(props.selectedYear).map((expense) => (
//         <ExpenseItem
//           key={expense.id}
//           title={expense.title}
//           date={expense.date}
//           price={expense.price}
//         />
//       ))}
//     </Card>
//   );
// }

// export default Expenses;

// Expenses.js
import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";

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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={props.selectedYear}
        onChangeFilter={props.onYearChange}
      />
      {filterExpenses(props.selectedYear).map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.price}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;





