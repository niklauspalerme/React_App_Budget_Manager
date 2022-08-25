import React, {useState } from 'react'
import Error from './Error';
import shortid from 'shortid'; //npm i shortid

 const Form = ( {addNewExpenses}) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false)

    const addExpenses = e => {

        e.preventDefault();

        //a) Validate
        if (quantity <1 || isNaN(quantity) || name.trim() === ''){
            setError(true);
            return;

        }

        //b) Assing Erro to defalt
        setError(false);

        //c) Capture the Object
        const expense = {
            name,
            quantity,
            id: shortid.generate()
        }

        //d) Add the object to the global State -App.js
        addNewExpenses(expense);

        //e) Reset the other states
        setName('');
        setQuantity(0)
            
    }


     return (  

        <form onSubmit = {addExpenses}>
            <h2>Add here your Bills</h2>

            {error ? <Error messages="Both fields are mandatory" /> : null}

            <div className='campo'>
                <label> Name: </label>
                <input type="text" className='u-full-width' placeholder=' Example: rent' value = {name} onChange={e=> setName(e.target.value)} />
            </div>

            <div className='campo'>
                <label> Quantity: </label>
                <input type="number" className='u-full-width' placeholder=' Example: 300' value = {quantity} onChange={e=> setQuantity(parseInt(e.target.value))}/>
            </div>

            <input type="submit" className='button' value="Adding +" />

        </form>


     );
 }
  
 export default Form;