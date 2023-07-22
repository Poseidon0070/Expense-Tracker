import "./ExpenseItem.css"
import ExpenseDate  from "./ExpenseDate"
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props){       
    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
    </Card>
    );
} 

export default ExpenseItem;

//we can also do object destructuring {date, title, amount}
//or
// <div className="expense-item">
//     <div>{props.expense.date.toDateString()}</div>
//     <div className="expense-item__description">
//         <h2>{props.expense.title}</h2>
//         <div className="expense-item__price">{props.expense.amount}</div>
//     </div>
// </div>