
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"


let NewExpense = (props) => {
    let dataSubmitHandler = (newData) => {
        let newExpense = {
            ...newData
        }
        props.sendData(newExpense)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onDataSubmit = {dataSubmitHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;