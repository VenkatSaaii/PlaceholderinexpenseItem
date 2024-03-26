
// import React, { useState } from "react";
// import Expenses from "./components/Expenses";
// import NewExpense from "./components/NewExpense";

// function generateDefaultExpenses() {
//   const currentYear = new Date().getFullYear();
//   return [
//     { id: 1, title: "Insurance", date: new Date(currentYear, 7, 15), price: 100 },
//     { id: 2, title: "Book", date: new Date(currentYear, 8, 25), price: 10 },
//     { id: 3, title: "Pen", date: new Date(currentYear, 2, 10), price: 1 },
//     { id: 4, title: "Laptop", date: new Date(currentYear, 9, 17), price: 200 },
//   ];
// }

// function App() {
//   const [expenses, setExpenses] = useState(generateDefaultExpenses());
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());

//   const addExpenseHandler = (enteredExpenseData) => {
//     const newExpense = {
//       id: Math.random().toString(),
//       title: enteredExpenseData.title,
//       amount: +enteredExpenseData.amount,
//       date: new Date(enteredExpenseData.date),
//     };

//     setExpenses((prevExpenses) => {
//       return [newExpense, ...prevExpenses];
//     });
//   };

//   const yearChangeHandler = (selectedYear) => {
//     setSelectedYear(selectedYear);
//   };

//   return (
//     <div>
//       <NewExpense onAddExpense={addExpenseHandler} />
//       <Expenses expenses={expenses} selectedYear={selectedYear} onYearChange={yearChangeHandler} />
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function generateDefaultExpenses(year) {
  return [
    { id: 1, title: "Insurance", date: new Date(year, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(year, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(year, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(year, 9, 17), price: 200 },
  ];
}

function App() {
  const currentYear = new Date().getFullYear();
  const [expenses, setExpenses] = useState(generateDefaultExpenses(currentYear));
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const addExpenseHandler = (enteredExpenseData) => {
    const newExpense = {
      id: Math.random().toString(),
      title: enteredExpenseData.title,
      amount: +enteredExpenseData.amount,
      date: new Date(enteredExpenseData.date),
    };

    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  const yearChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
    setExpenses(generateDefaultExpenses(selectedYear));
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} selectedYear={selectedYear} onYearChange={yearChangeHandler} />
    </div>
  );
}

export default App;






