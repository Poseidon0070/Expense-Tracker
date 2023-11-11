import { useState } from "react";
import "./ExpenseForm.css"

let ExpenseForm = (props) => {
    //multi-state approach
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    let titleHandler = (event) => {
        setTitle(event.target.value)
    }
    let amountHandler = (event) => {
        setAmount(event.target.value)
    }
    let dateHandler = (event) => {
        setDate(event.target.value)
    }
    //alternate single-state approach
    // const [userInput, setInput] = useState({
    //     title : '',
    //     amount : '',
    //     date : ''
    // })
    // let titleHandler = (event) => {
    //     // setInput({
    //     //     ...userInput,                               //this method can sometime cause wrong result, when scheduling of large number 
    //     //     title : event.target.value                  // of input may give incorrect prevstate. use function form as shown.
    //     // });
    //     setInput((prevstate) => {
    //         return ({...prevstate, title:event.target.value})
    //     })
    // }
    // let amountHandler = (event) => {
    //     // setInput({
    //     //     ...userInput,
    //     //     amount : event.target.value
    //     // });
    //     setInput((prevstate) => {
    //         return ({...prevstate, amount:event.target.value})
    //     })
    // }
    // let dateHandler = (event) => {
    //     // setInput({
    //     //     ...userInput,
    //     //     date : event.target.value
    //     // });
    //     setInput((prevstate) => {
    //         return ({...prevstate, date:event.target.value})
    //     })
    // }
    // console.log(userInput)
    let submitHandler = (event) => {
        event.preventDefault(); 
        let expenseData = {
            title : title,
            amount : amount,
            date : new Date(date)
        }
        setTitle('')
        setAmount('')
        setDate('')
        props.onDataSubmit(expenseData)
    }
    //value default rk dega jb reload hoga!
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleHandler} />        
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2023-12-30" value={date} onChange={dateHandler} />
                </div>
            </div>
            <div className="new-expense__action">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm

