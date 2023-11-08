import { useEffect } from "react";

const Card = (props) => {
  const { data } = props;

  useEffect(() => {
    console.log('Data changed!');
  }, [data]);

  return (
    <div className="card">
      <p>ID: {data.id}</p>
      <p>Text: {data.text}</p>
    </div>
  )
}

export default Card;