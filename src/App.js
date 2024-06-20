import { useState } from 'react';
import './App.css';
import CardCpomponent from './components/Cards/Cards';
import { lightMiddleAges } from './components/Cards/data';

function App() {
  const [finishedItems, setFinishedItems] = useState([]); //хранит все открытые пары

  function checkClick(firstCard, SecCard) {
    const card1 = lightMiddleAges.find((el) => el.id === firstCard);
    const card2 = lightMiddleAges.find((el) => el.id === SecCard);
    if (card1.url === card2.url) {
      setFinishedItems(item => [...item, firstCard, SecCard]);
    };
  }

  return (
    <div>
      <CardCpomponent checkClick={checkClick} finishedItems={finishedItems} typeOfCards={lightMiddleAges} />
    </div>
  );
}

export default App;
