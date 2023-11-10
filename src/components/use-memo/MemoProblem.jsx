import { useState, useMemo } from "react";

const longCalculation = (value) => {
  let sum = 0;

  for (let i = 1; i <= 1000000000; i++) {
    sum = sum + value;
  }

  return sum;
}

const LongCalculation = (props) => {
  let sum = 0;

  for (let i = 1; i <= 1000000000; i++) {
    sum = sum + props.value;
  }

  return (
    <h3>Calculated Value: {sum}</h3>
  );
};

const MemoProblem = () => {
  const [todos, setTodos] = useState(['Todo 1']);
  const [count, setCount] = useState(0);

  // const calculatedValue = useMemo(() => longCalculation(count), [count]);
  const calculatedValue = useMemo(() => <LongCalculation value={count} />, [count]);

  const handleAddTodo = () => {
    setTodos([
      ...todos,
      'Todo ' + (todos.length + 1),
    ]);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ height: '90vh', padding: '50px 100px' }}>
      <h1>My Todos</h1>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
      <div>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <hr style={{ margin: '20px 0' }} />

      <div>
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      {calculatedValue}
    </div>
  )
}

export default MemoProblem;