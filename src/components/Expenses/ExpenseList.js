import "./ExpenseList.css"
import ExpenseItem from "./ExpenseItem";
let ExpenseList = (props) => {
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">&emsp;No items Found!</h2>
    }
    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (<ExpenseItem key={expense.id} date={expense.date} amount={expense.amount} title={expense.title}></ExpenseItem>))}
        </ul>
    ) 
}

export default ExpenseList;