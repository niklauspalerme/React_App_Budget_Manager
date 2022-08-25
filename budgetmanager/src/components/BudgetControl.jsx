import React, { Fragment } from 'react';

const BudgetControl = ({budget, result}) => {
    return ( 
        <Fragment>
            <div className='alert alert-primary'> Presupuesto: ${budget} </div>

            <div className='alert'> Restante : ${result} </div>

        </Fragment>
     );
}
 
export default BudgetControl;