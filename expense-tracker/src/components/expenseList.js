import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./expenseItem";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

function ExpenseList() {
  const { expenses } = useContext(AppContext);
  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
    const searchResults = expenses.filter((filteredExpense) =>
      filteredExpense.name.toLowerCase().includes(event.target.value)
    );
    setfilteredExpenses(searchResults);
  };

  var Local_Expenses = [];

  for (let i = 0; i < localStorage.length; i++) {
    var Local_Expense = {};
    let key = localStorage.key(i);
    if ( key != "###whfvhgsvfhsdvf83r3ijsdjfkshjfkhkshdfkjsfu23rh###") {
      Local_Expense.id = uuidv4();
      Local_Expense.cost = localStorage.getItem(key);
      Local_Expense.name = key;
      Local_Expenses.push(Local_Expense);
    }
  }

  return (
    <div>
      <br></br>
      <h4>Expenses</h4>
      <ul className="list-group">
        {Local_Expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}

        {/* {filteredExpenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))} */}
      </ul>
    </div>
  );
}

export default ExpenseList;
