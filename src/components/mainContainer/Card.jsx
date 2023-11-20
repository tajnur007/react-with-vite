import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { data, isTodo } = props;
  const navigate = useNavigate();

  useEffect(() => {
    // console.log('Data changed!');
  }, [data]);

  const navigateToDynamicTodo = () => {
    navigate('/todos/' + data.id);
  }

  if (isTodo) {
    return (
      <div onClick={navigateToDynamicTodo} className={`card ${data.completed ? 'complete' : 'incomplete'}`}>
        <p>ID: {data.id}</p>
        <p>User ID: {data.userId}</p>
        <p>Title: {data.title}</p>
      </div>
    )
  }

  return (
    <div className="card">
      <p>ID: {data.id}</p>
      <p>Text: {data.text}</p>
    </div>
  )
}

export default Card;