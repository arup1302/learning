
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber,dncNumber } from './actions/Counter'

function App() {
  const myState = useSelector((state)=> state.changeNumber)
const dispatch= useDispatch();
  return (
    <div className="App">
   <h2> hello welcome to practice set</h2>

   
 <br /> <br />
 <button onClick={()=>dispatch( incNumber())}> Increment(+)</button>
    <h2> value:{myState}</h2>
 <button onClick={()=>dispatch( dncNumber(5))}> Decrement(-)</button>
   
      
    </div>
  );
}

export default App;
