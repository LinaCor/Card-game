import { useState } from 'react';
import './App.css';
import CardCpomponent from './components/Cards/CardCpomponent';
import { middleAges, gameToggle } from './components/Cards/data';
import { StartGame } from './components/Cards/StartGame';


function App() {
  const [finishedItems, setFinishedItems] = useState([]);
  const [gameScreen, setGameScreen] = useState(gameToggle.BEGGIN);
  const [gameCards, setGameCards] = useState(middleAges.lightMiddleAges);
  const [nameCards, setNameCards] = useState('');

  function checkClick(firstCard, SecCard) {
    const card1 = gameCards.find((el) => el.id === firstCard);
    const card2 = gameCards.find((el) => el.id === SecCard);
    if (card1.url === card2.url) {
      setFinishedItems(item => [...item, firstCard, SecCard]);
    };
  }

  function backToMenu() {
    setGameScreen(gameToggle.BEGGIN);
    setFinishedItems([]);
  }

  function decideCards(name) {
    if (name === 'errors') {
      setGameScreen(gameToggle.GAME_ERROR);
      setGameCards(middleAges.lightMiddleAges);
      setNameCards('errors');
    } else {
      setGameScreen(gameToggle.GAME_TIME);
      setGameCards(middleAges.darkMiddleAges);
      setNameCards('time');
    }
  }

  const pageGame = (route) => {

    switch (route) {
      case gameToggle.BEGGIN:
        return (
          <div className="app-container">
            <StartGame decideCards={decideCards}></StartGame>
          </div>
        );
      case gameToggle.GAME_TIME:
      case gameToggle.GAME_ERROR:
        return (
          <div className="app-container">
            <CardCpomponent checkClick={checkClick} finishedItems={finishedItems} typeOfCards={gameCards} backToMenu={backToMenu} nameCards={nameCards} />
          </div>
        );
      default:
        return null;
    }
  }


  return pageGame(gameScreen);
}

export default App;
