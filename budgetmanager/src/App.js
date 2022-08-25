//////////////////////////////////////////////////////////////////////////////////////////////
/// Imports


import './App.css';
import Question from './components/Question';
import React, { useEffect, useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

//////////////////////////////////////////////////////////////////////////////////////////////
/// Components


function App() {

  ///// state

  const [budget, setBudget] = useState(0);
  const [result, setResult]= useState(0);
  const [showquestion, setShowquestion] = useState(true);
  const [expenses , setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false); //Flag



  ///// useEffect

  useEffect ( () =>{

    if (createExpense){
      setExpenses([...expenses, expense]); 
      const budgetResult = result - expense.quantity;
      setResult(budgetResult);
    }

    setCreateExpense(false);

  },[expense]); 


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
                    <Form setExpense={setExpense} setCreateExpense={setCreateExpense}/>
                  </div>
                  <div className='one-half column'>
                    <List expenses={expenses} />
                    <BudgetControl budget={budget}  result={result}/>
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
