
import './App.css';
import Header from './conponents/Header';
import Left from './conponents/Left';
import Rigth from './conponents/Rigth';

function App() {
  return (
    <div className="App">
     <h3>React App</h3>
        <Header/>
        <div className='flexContainer' style={{display:"flex", justifyContent: "space-around"}}>
          <Left/>
          <Rigth/>
        </div>
    </div>
  );
}

export default App;
