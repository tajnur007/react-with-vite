import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { CounterActions, decrement, increment, incrementByAmount } from "../store/slice/counterSlice";

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();


  const handleIncrement = () => {
    dispatch(CounterActions.increment());
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '50px 100px' }}>
        <h1>Value: {count}</h1>
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={handleIncrement}>IncrementV2</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>IncrementByValue</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Counter;