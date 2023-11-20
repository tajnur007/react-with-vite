import { Fragment, useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link, useParams } from "react-router-dom";


const DynamicTodo = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/' + todoId)
      .then(resp => resp.json())
      .then(data => setTodo(data));
  })

  return (
    <Fragment>
      <Navbar />
      <p style={{ padding: '15px 30px' }}><Link to={'/todos'}> &lt; Back to Todos </Link></p>
      <h1 style={{ padding: '30px 0 0 0', textAlign: 'center' }}>We are in todo: <strong>{todoId}</strong></h1>
      <div style={{ padding: '50px 100px' }}>
        <p>ID: {todo.id}</p>
        <p>User ID: {todo.userId}</p>
        <p>Title: {todo.title}</p>
      </div>
      <Footer />
    </Fragment>
  )
}

export default DynamicTodo;