import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { increaseCount1, decreaseCount1, clearCount, setCount } from './store/module/counterStore';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.count)

  const [inputValue, setInputValue] = useState(0)

  const handleSubmit = () => {
    dispatch(setCount(inputValue))
    setInputValue(0)
  }

    return (
        <div>
            <button onClick={() => {dispatch(decreaseCount1())}}>-1</button>
            {count}
            <button onClick={() => {dispatch(increaseCount1())}}>+1</button>
            <button onClick={() => {dispatch(clearCount())}}>Clear</button>
            <input pattern="[1-9][0-9]*" placeholder="Please input NUM" type="number" value={inputValue} onChange={(event) => {setInputValue(event.target.value)}}></input>
            <button onClick={() => {handleSubmit()}}>Submit</button>
            <button><Link to="/login">Login</Link></button>
        </div>
    );
}

export default App;
