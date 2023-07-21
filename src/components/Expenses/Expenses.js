import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css"
function Expenses(props){
    return (
        <Card className="expenses">
            {props.children}
            <ExpenseItem date={props.items[0].date} amount={props.items[0].amount} title={props.items[0].title}></ExpenseItem>
            <ExpenseItem date={props.items[1].date} amount={props.items[1].amount} title={props.items[1].title}></ExpenseItem>
            <ExpenseItem date={props.items[2].date} amount={props.items[2].amount} title={props.items[2].title}></ExpenseItem>
            <ExpenseItem date={props.items[3].date} amount={props.items[3].amount} title={props.items[3].title}></ExpenseItem>
        </Card>
    );
}
export default Expenses;