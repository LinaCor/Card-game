import { useState } from 'react';
import './App.css';
import CardCpomponent from './components/Cards/CardCpomponent';
import { lightMiddleAges, gameToggle } from './components/Cards/data';
import { StartGame } from './components/Cards/StartGame';
import timerIcon from './timer.svg';


function App() {
  const [finishedItems, setFinishedItems] = useState([]);
  const [gameScreen, setGameScreen] = useState(gameToggle.BEGGIN);

  function checkClick(firstCard, SecCard) {
    const card1 = lightMiddleAges.find((el) => el.id === firstCard);
    const card2 = lightMiddleAges.find((el) => el.id === SecCard);
    if (card1.url === card2.url) {
      setFinishedItems(item => [...item, firstCard, SecCard]);
    };
  }

  function decideCards(name) {
    name === 'errors' ? setGameScreen(gameToggle.GAME_ERROR) : setGameScreen(gameToggle.GAME_TIME);
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
        return (
          <div className="app-container">
            <section class="rules">
              <h2>Раздел находится в разработке :)</h2>
              <div class="timer-icon">
                <img src={timerIcon} alt="timer" />
              </div>
            </section>
          </div>
        );
      case gameToggle.GAME_ERROR:
        return (
          <div className="app-container">
            <CardCpomponent checkClick={checkClick} finishedItems={finishedItems} typeOfCards={lightMiddleAges} />
          </div>
        );
      default:
        return null;
    }
  }


  return pageGame(gameScreen);
}

export default App;
