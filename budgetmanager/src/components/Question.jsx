//////////////////////////////////////////////////////////////////////////////////////////////
/// Imports

import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


//////////////////////////////////////////////////////////////////////////////////////////////
/// Components

const Question = ({setBudget, setResult, setShowquestion}) => {

    ///// State

    const [quantity, setQuantity] = useState();
    const [error,setError]= useState(false)

    ///// Events

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
           
        //Si se pasa la validacion
        setError(false);
        setBudget(quantity);
        setResult(quantity);
        setShowquestion(false);
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
//PropTypes

Question.propTypes = {
    setBudget: PropTypes.func.isRequired, 
    setResult: PropTypes.func.isRequired, 
    setShowquestion: PropTypes.func.isRequired
}

//////////////////////////////////////////////////////////////////////////////////////////////
/// Exports
 
export default Question;