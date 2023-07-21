import "./ExpenseItem.css"
import ExpenseDate  from "./ExpenseDate"
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props){       
    const [title,setTitle] = useState(props.title)         //state work on per component basis
    let clickHandler = () => {
        setTitle('Updated!')
        console.log(title)
    }
    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{props.amount}</div>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    </Card>
    );
} 

export default ExpenseItem;



//we can also do objext destructuring {date, title, amount}
//or
// <div className="expense-item">
//     <div>{props.expense.date.toDateString()}</div>
//     <div className="expense-item__description">
//         <h2>{props.expense.title}</h2>
//         <div className="expense-item__price">{props.expense.amount}</div>
//     </div>
// </div>