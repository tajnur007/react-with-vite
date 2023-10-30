
const Card = (props) => {
  const { data } = props;

  return (
    <div className="card">
      <p>ID: {data.id}</p>
      <p>Text: {data.text}</p>
    </div>
  )
}

export default Card;