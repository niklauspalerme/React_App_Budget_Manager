//////////////////////////////////////////////////////////////////////////////////////////////
/// Imports


import React, { Fragment } from 'react';
import {checkBudget} from '../helpers';
import PropTypes from 'prop-types';


//////////////////////////////////////////////////////////////////////////////////////////////
/// Components


const BudgetControl = ( {budget, result}) => {
    return ( 
        <Fragment>
            <div className='alert alert-primary'> Presupuesto: ${budget} </div>

            <div className={checkBudget(budget, result)}> Restante : ${result} </div>

        </Fragment>
     );
}


//////////////////////////////////////////////////////////////////////////////////////////////
//PropTypes


BudgetControl.propTypes= {
    budget: PropTypes.number.isRequired,
    result: PropTypes.number.isRequired
}


//////////////////////////////////////////////////////////////////////////////////////////////
/// Exports

 
export default BudgetControl;