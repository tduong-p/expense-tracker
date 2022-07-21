import React, { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import { UserContext } from "./addBudget";

function Budget() {
  const { budgetState } = useContext(BudgetContext);
  console.log({budgetState});
  window.localStorage.setItem("###whfvhgsvfhsdvf83r3ijsdjfkshjfkhkshdfkjsfu23rh###", budgetState);
  return (
  <div className="alert alert-secondary">Your budget: ${ budgetState }</div>
  );
};



export default Budget;
