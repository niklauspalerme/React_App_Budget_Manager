import React, {useState } from 'react'

 const Form = () => {
     return (  

        <form>
            <h2>Add here your Bills</h2>

            <div className='campo'>
                <label> Name: </label>
                <input type="text" className='u-full-width' placeholder=' Example: rent' />
            </div>

            <div className='campo'>
                <label> Quantity: </label>
                <input type="number" className='u-full-width' placeholder=' Example: 300' />
            </div>

            <input type="submit" className='button' value="Adding +" />

        </form>


     );
 }
  
 export default Form;