import Card from './Card';
import './MainContainer.css';

const MainContainer = () => {
  const cards = [
    { id: 1, text: 'dkfksadbucizk cxhijawdc cnjzh' },
    { id: 2, text: 'dkfksadbucizk cxhijawdc cnjzh' },
    { id: 3, text: 'dkfksadbucizk cxhijawdc cnjzh' },
    { id: 4, text: 'dkfksadbucizk cxhijawdc cnjzh' },
    { id: 5, text: 'dkfksadbucizk cxhijawdc cnjzh' },
  ];

  return (
    <main>
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </main>
  )
}

export default MainContainer;