import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'DoorMat',
    amount: 300,
    date: new Date(2022, 7, 12),
  },
  {
    id: 'e6',
    title: 'Laptop',
    amount: 799,
    date: new Date(2022, 3, 12),
  },
  {
    id: 'e7',
    title: 'Utensils',
    amount: 300,
    date: new Date(2019, 9, 12),
  },
];

function App() {
  const [expenses,setExpenses] = useState(dummyExpenses)

  let newExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
    })
  }
  return (
    <div>
      <NewExpense sendData={newExpenseHandler}></NewExpense>
      <Expenses items={expenses}>
      </Expenses>
    </div>
  );
}

export default App;




//method-2
/* <div>
  <ExpenseItem expense={expenses[0]}></ExpenseItem>
  <ExpenseItem expense={expenses[1]}></ExpenseItem>
  <ExpenseItem expense={expenses[2]}></ExpenseItem>
  <ExpenseItem expense={expenses[3]}></ExpenseItem>
</div> */