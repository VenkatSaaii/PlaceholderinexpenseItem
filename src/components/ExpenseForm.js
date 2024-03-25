import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleHandler = (event) => {
       setEnteredTitle(event.target.value);
    };

    const amountHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateHandler = (event) => {
       setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls" >
                <div className="new-expense__control" > Expense Title</div>
                <input type="text" value={enteredTitle} onChange={titleHandler}/>

                <div className="new-expense__control"> Expense Amount</div>
                <input type="number" value={enteredAmount} onChange={amountHandler} />
                
                <div className="new-expense__control"> Date</div>
                <input type="date" value={enteredDate} onChange={dateHandler} />
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
