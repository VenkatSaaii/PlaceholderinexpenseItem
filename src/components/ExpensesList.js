  import React from "react";
   import ExpenseItem from "./ExpenseItem";
   import './ExpensesList.css';
 const ExpensesList= props =>{
  
  if(props.expenses.length===0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2> 
  }
   else if(props.expenses.length===1){
    return  <div><ul className="expenses-list">
    {props.expenses.map((expense) => (
  <ExpenseItem
    key={expense.id}
    title={expense.title}
    date={expense.date}
    price={expense.amount}
     />
    ))}
    </ul>
    <p className="expenses-list__message">Only single Expense here.Please add more...</p>
    </div>

  }else{
   
    return <ul className="expenses-list">
        {props.expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        price={expense.amount}
        
      />
    ))}

    </ul>
 }
}

 export default ExpensesList;