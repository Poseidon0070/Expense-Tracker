import Card from "../UI/Card";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList"
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
    let [currFilter, setcurrFilter] = useState('2022')
    let newFilter = (filter) => {
        setcurrFilter(filter);
    }
    let filteredExpenses = props.items.filter((expenses) => {
        return expenses.date.getFullYear().toString() === currFilter;
    })
    return (
        <Card className="expenses">
            <ExpensesFilter selected={currFilter} onChangeFilter={newFilter}></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses}></ExpenseList>
        </Card>
    );
}
export default Expenses;