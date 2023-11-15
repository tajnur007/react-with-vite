import { useEffect, useId, useState } from 'react';
import LoginForm from '../login-form/LoginForm';
import LoginForm2 from '../login-form/LoginForm2';
import Card from './Card';
import './MainContainer.css';

const MainContainer = (props) => {
  const [keyword, setKeyword] = useState('');
  const [cards, setCards] = useState([
    { id: 1, text: 'dkfksadbucizk cxhijawdc cnjzh' },
    { id: 2, text: 'dkfksadbucizk cxhijawdc cnjzh' },
    { id: 3, text: 'dkfksadbucizk cxhijawdc cnjzh' },
    { id: 2, text: 'dkfksadbucizk cxhijawdc cnjzh' },
    { id: 5, text: 'dkfksadbucizk cxhijawdc cnjzh' },
  ]);

  useEffect(() => {
    fetch(`search/${keyword}`, { method: 'GET' });
  }, [keyword]);

  const handleChangeData = () => {
    setCards(cards.map(card => {
      card.id = card.id + 5;
      return card;
    }));
  }

  const onKeywordChange = (e) => {
    setKeyword(e.target.value);
  }

  const onKeywordChange2 = (e) => {
    setKeyword(e.target.value);
  }

  const onKeywordChange3 = (e) => {
    setKeyword(e.target.value);
  }

  const onKeywordChange4 = (e) => {
    setKeyword(e.target.value);
  }

  return (
    <main>
      {props.children}
      <div className="card-container">
        {cards.map((card, idx) => (
          <Card key={idx} data={card} />
        ))}
      </div>

      <div>
        <button onClick={handleChangeData}>Change Data</button>
      </div>
      <div>
        Search: <input type="text" onBlur={onKeywordChange} />
      </div>
      <div>
        Keyword: {keyword}
      </div>

      {/* <LoginForm /> */}
      {/* <LoginForm2 /> */}
    </main>
  )
}

export default MainContainer;