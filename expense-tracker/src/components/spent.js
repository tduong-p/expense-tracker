import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import {BudgetContext} from '../context/BudgetContext';

function Spent() {
	const { totalExpenses, setTotalExpenses } = useContext(BudgetContext);

    var temp = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
		if (key != "###whfvhgsvfhsdvf83r3ijsdjfkshjfkhkshdfkjsfu23rh###")
        {temp += parseInt(localStorage.getItem(key));};
    };
    setTotalExpenses(temp);

	return (
		<div className='alert alert-danger'>
			<span>Spent so far: £{totalExpenses}</span>
		</div>
	);
    
}

export default Spent;