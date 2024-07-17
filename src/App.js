import { useState } from 'react';
import './App.css';
import CardCpomponent from './components/Cards/CardCpomponent';
import { middleAges, gameToggle, createCardField } from './components/Cards/data';
import { StartGame } from './components/Cards/StartGame';


function App() {
  const COUNTER_LIVES = 6;
  const [finishedItems, setFinishedItems] = useState([]);
  const [gameScreen, setGameScreen] = useState(gameToggle.BEGGIN);
  const [gameCards, setGameCards] = useState();
  const [nameOfCards, setNameOfCards] = useState('');
  const [livesCount, setLivesCount] = useState(COUNTER_LIVES);


  function checkClick(firstCard, SecCard) {
    const card1 = gameCards.find((el) => el.id === firstCard);
    const card2 = gameCards.find((el) => el.id === SecCard);

    if (card1.url === card2.url) {
      setFinishedItems(item => [...item, firstCard, SecCard]);
    } else {
      setLivesCount(prev => prev - 1);
    };
  }

  function backToMenu() {
    setGameScreen(gameToggle.BEGGIN);
    setFinishedItems([]);
    setLivesCount(COUNTER_LIVES);
  }

  function restartGame() {
    setFinishedItems([]);
    decideCards(nameOfCards);
    setLivesCount(COUNTER_LIVES);
  }

  function decideCards(name) {
    if (name === 'errors') {
      setGameScreen(gameToggle.GAME_ERROR);
      setGameCards(createCardField(middleAges.lightMiddleAges));
      setNameOfCards('errors');
    } else {
      setGameScreen(gameToggle.GAME_TIME);
      setGameCards(createCardField(middleAges.darkMiddleAges));
      setNameOfCards('time');
    }
  }

  const pageGame = (route) => {

    switch (route) {
      case gameToggle.BEGGIN:
        return (
          <div className="beggin-wrapper">
            <StartGame decideCards={decideCards}></StartGame>
          </div>
        );
      case gameToggle.GAME_TIME:
      case gameToggle.GAME_ERROR:
        return (
          <div className="game-wrapper">
            <CardCpomponent checkClick={checkClick} finishedItems={finishedItems} typeOfCards={gameCards} backToMenu={backToMenu} nameOfCards={nameOfCards} restartGame={restartGame} livesCount={livesCount} />
          </div>
        );
      default:
        return null;
    }
  }


  return pageGame(gameScreen);
}

export default App;
