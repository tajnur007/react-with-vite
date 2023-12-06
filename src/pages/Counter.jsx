import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { CounterActions, decrement, increment, incrementByAmount } from "../store/slice/counterSlice";
import HigherOrderComponent from "../components/HigherOrderComponent";
import AnotherComponent from "../components/AnotherComponent";

const Counter = () => {
  const count = useSelector(store => store.counter.value);
  const user = useSelector(store => store.userData.user);
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

        {user ? (
          // True block 
          <div>
            <h3>User Info</h3>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ) : (
          // Flase block 
          <p>No user loggedin at this moment</p>
        )}
      </div>


      <HigherOrderComponent
        insideComponent={<AnotherComponent />}
      />
      <Footer />
    </div>
  )
}

export default Counter;