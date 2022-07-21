import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { BudgetContext } from "../context/BudgetContext";
import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/AddExpense.css";

function AddExpense(props) {
  const {totalExpenses, setTotalExpenses} = useContext(BudgetContext);
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    window.localStorage.setItem(name, parseInt(cost));
    setTotalExpenses(totalExpenses + cost);


    setName('');
    setCost('');
  };

  return (
    <div className="container">
      <br></br>
      <h4>Add Expense</h4>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col">
            <label for="name">Name</label>
            <input
              required="required"
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
          </div>
          <div className="col">
            <label for="cost">Cost</label>
            <input
              required="required"
              type="number"
              className="form-control"
              id="cost"
              min="0"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            ></input>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <br></br>
            <button className="btn btn-primary" type="submit" id="button">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddExpense;
