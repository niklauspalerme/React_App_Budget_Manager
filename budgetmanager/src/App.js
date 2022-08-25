//////////////////////////////////////////////////////////////////////////////////////////////
/// Imports


import './App.css';
import Question from './components/Question';
import React, { useState} from 'react';
import Form from './components/Form';


//////////////////////////////////////////////////////////////////////////////////////////////
/// Components


function App() {

  ///// state

  const [budget, setBudget] = useState(0);
  const [result, setResult]= useState(0);
  const [showquestion, setShowquestion] = useState(true)
  const [expenses , setExpenses] = useState([])


  ///// Functions
  const addNewExpenses = newExpense => {

    setExpenses([...expenses, newExpense]);

  }


  return (
    <div className="container">
      <header>
        <h1>Budget Manager</h1>
        <div className='contenido-principal contenido'>

          { 
            showquestion === true
            ?(
              <Question  setBudget={setBudget} setResult={setResult} setShowquestion={setShowquestion}/>
            )
            :(
                <div className='row'>
                  <div className='one-half column'>
                    <Form addNewExpenses={addNewExpenses}/>
                  </div>
                  <div className='one-half column'>
                    1
                </div>
              </div> 
            )
          }
        </div>
     </header>
    </div>
  );
}


//////////////////////////////////////////////////////////////////////////////////////////////
/// Exports


export default App;
