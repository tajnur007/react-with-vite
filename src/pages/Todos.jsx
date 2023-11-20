import { Fragment, useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Card from '../components/mainContainer/Card';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(resp => resp.json())
      .then(data => setTodos(data));
  }, []);


  return (
    <Fragment>
      <Navbar />
      <h1 style={{ padding: '30px 0 0 0', textAlign: 'center' }}>We have <strong>{todos.length}</strong> todos</h1>
      <div className='todos-container' style={{ padding: '50px 100px' }}>
        {todos.map((todo) => (
          <Card key={todo.id} data={todo} isTodo={true} />
        ))}
      </div>
      <Footer />
    </Fragment>
  )
}

export default Todos;