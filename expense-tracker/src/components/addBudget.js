import React, { useState, useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";


import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/AddExpense.css";

function AddBudget(props) {
  const { budgetState, setBudgetState } = useContext(BudgetContext);
  const [budget, setBudget] = useState("");


  const onSubmit = (event) => {
    event.preventDefault();
    const data = parseInt(budgetState) + parseInt(budget);
    setBudgetState(parseInt(data));
    window.localStorage.setItem('###whfvhgsvfhsdvf83r3ijsdjfkshjfkhkshdfkjsfu23rh###', data);

    setBudget("");
  };

  return (
    <div className="container">
      <br></br>
      <h4>Add Budget</h4>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col">
            <label for="budget_add">Add Budget</label>
            <input
              required="required"
              type="number"
              className="form-control"
              id="budget"
              min="0"
              value= {budget}
              onChange={(event) => setBudget(event.target.value)}
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

export default AddBudget;
