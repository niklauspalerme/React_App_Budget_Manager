import './App.css';
import Question from './components/Question';


function App() {
  return (
    <div className="container">
      <header>
        <h1>Budget Manager</h1>
        <div className='contenido-principal contenido'>
          <Question />
        </div>
     </header>
    </div>
  );
}

export default App;
