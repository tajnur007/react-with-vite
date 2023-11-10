import { useAuthSession } from "../hooks/authHook";
import { useMyHook } from "../hooks/myFirstHook";


const CustomHook = () => {
  const [count, setCount] = useMyHook(0);
  const { status, user } = useAuthSession();

  const handleIncrement = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div style={{ height: '90vh', padding: '50px 100px' }}>
      CustomHook

      <h1>Value: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>

      {(status === 'loading') ? (
        <p>User data loading....</p>
      ) : (status === 'unauthorized') ? (
        <p>Unauthorized user</p>
      ) : (
        <p>
          Name: {user.name} <br />
          Email: {user.email} <br />
          Mobile: {user.phone}
        </p>
      )}
    </div>
  )
}

export default CustomHook;