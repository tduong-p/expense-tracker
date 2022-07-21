import React, { useContext } from "react";
import { AppContext } from '../context/AppContext';
import {totalExpenses} from './spent';
import {BudgetContext} from '../context/BudgetContext';

function Remaining() {
    const { budgetState, setBudgetState } = useContext(BudgetContext);
    const { totalExpenses, setTotalExpenses } = useContext(BudgetContext);
    const { remaining, setRemaining } = useContext(BudgetContext);
    var temp1;
    var temp2;
    var temp3;
    temp1 = budgetState;
    temp2 = totalExpenses;
    temp3 = temp1 - temp2;
    setRemaining(temp3);
    console.log(temp3);

    return (
        <div className="alert alert-success">
            <span>Remaining: {remaining}</span>
        </div>
    )
}

export default Remaining;