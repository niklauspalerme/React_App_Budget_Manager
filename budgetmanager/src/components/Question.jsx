//////////////////////////////////////////////////////////////////////////////////////////////
/// Imports

import React, {Fragment, useState} from 'react';
import Error from './Error';


//////////////////////////////////////////////////////////////////////////////////////////////
/// Components

const Question = () => {

    // State
    const [quantity, setQuantity] = useState();
    const [error,setError]= useState(false)

    //Events

    const defineBudget = (e) =>{
        setQuantity(parseInt(e.target.value));
    }

    const addBudget = (e) => {
        e.preventDefault();

        //Validar
        if (quantity < 1 || quantity === 0 || isNaN(quantity)){
            setError(true);
            return
        }

        setError(false)
           
        //Si se pasa la validacion
    }

    return ( 
        <Fragment>

            <h2>Type your Budget</h2>

            { error
              ? <Error messages="There is an error" />
              :null
            }

            <form  onSubmit={addBudget}>
                <input type="number" className='u-full-width' placeholder='Type your budget' onChange={defineBudget}/>
                <input type="submit" className='button-primary u-full-width' value="Definir Presupuesto"/>
            </form>

        </Fragment>
     );
}


//////////////////////////////////////////////////////////////////////////////////////////////
/// Exports
 
export default Question;