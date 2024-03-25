import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) { 
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">      
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterHandler} />
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      ))}
    </Card>
  );
}

export default Expenses;
