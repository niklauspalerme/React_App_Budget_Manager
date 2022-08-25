//////////////////////////////////////////////////////////////////////////////////////////////
/// Imports


import React from 'react';
import Expense from './Expense';
import PropTypes from 'prop-types';

 
//////////////////////////////////////////////////////////////////////////////////////////////
/// Components


const List = ({expenses}) => (
    <div className='gastos-realizados'>
        <h2>Listado</h2>
        {expenses.map( expense => (
            <Expense expense={expense} key={expense.id}/>
        ))}
    </div>
)



//////////////////////////////////////////////////////////////////////////////////////////////
//PropTypes


List.propTypes = {
    expenses: PropTypes.array.isRequired
}


//////////////////////////////////////////////////////////////////////////////////////////////
/// Exports


export default List;