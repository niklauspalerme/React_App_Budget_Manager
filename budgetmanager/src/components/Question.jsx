//////////////////////////////////////////////////////////////////////////////////////////////
/// Imports

import React, {Fragment} from 'react';


//////////////////////////////////////////////////////////////////////////////////////////////
/// Components

const Question = () => {
    return ( 
        <Fragment>

            <h2>Type your Budget</h2>

            <form >
                <input type="number" className='u-full-width' placeholder='Type your budget'/>
                <input type="submit" className='button-primary u-full-width' value="Definir Presupuesto"/>
            </form>

        </Fragment>
     );
}


//////////////////////////////////////////////////////////////////////////////////////////////
/// Exports
 
export default Question;