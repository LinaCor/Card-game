import { useState } from 'react';
import './css/style.css';
import arrow from '../Cards/img/middle-ages/arrow-to-menu.svg'
import { EndGame } from './EndGame';
import { TimerEnd } from './TimerEnd';
import { LiveEnd } from './LiveEnd';

function CardCpomponent({ checkClick, finishedItems, typeOfCards, backToMenu, nameOfCards, restartGame, livesCount }) {
  const TIMEOUT = 1500;
  const TIMER_GAME = 450;
  const [visibles, setVisibles] = useState([]);
  const [timer, setTimer] = useState(TIMER_GAME);
  const [userLost, setUserLost] = useState(false);

  const gameWin = finishedItems.length === typeOfCards.length;
  const gameLose = (finishedItems.length !== typeOfCards.length && timer === 0) || (livesCount === 0 && nameOfCards === 'errors');


  function handleCardClick(id) {
    if (visibles.includes(id) || finishedItems.includes(id)) {
      return;
    }

    switch (visibles.length) {
      case 0:
        setVisibles([id]);
        break;
      case 1:
        setVisibles((items) => [...items, id]);
        checkClick(visibles[0], id);
        setTimeout(() => {
          setVisibles([]);
        }, TIMEOUT);
        break;
      default:
        setVisibles([]);
    }
  }


  function handleRestartGame() {
    restartGame();
    setTimer(TIMER_GAME);
  }


  return (
    <>
      <section className="game container">
        {nameOfCards === 'errors' ?
          <LiveEnd livesCount={livesCount} /> :
          <TimerEnd userLost={setUserLost} timer={timer} setTimer={setTimer} gameWin={gameWin} />}
        <ul className="cards">
          {typeOfCards.map((item) => <Card
            id={item.id}
            key={item.id}
            images={item.url}
            descr={item.description}
            isVisible={visibles.includes(item.id)}
            isFinished={finishedItems.includes(item.id)}
            checkLength={visibles.length}
            handleCardClick={handleCardClick}
            nameOfCards={nameOfCards}
          />)}
        </ul>
        <button className="btn cards-button" onClick={backToMenu}>
          <img src={arrow} alt='icon' />
          <p>Вернуться на главную</p>
        </button>
        <EndGame backToMenu={backToMenu} restartGame={handleRestartGame} gameLose={gameLose} gameWin={gameWin} />
      </section>
    </>
  )
}


//отдельная карточка 
function Card({ id, images, descr, isVisible, isFinished, handleCardClick, checkLength, nameOfCards }) {

  const errorCards = !isFinished && isVisible && checkLength === 2;
  const classCard = `${isVisible ? 'card-show' : ''} 
                    ${isFinished ? 'card-finished' : ''}
                    ${errorCards ? 'card-miss' : ''}`;

  function clickCard() {
    handleCardClick(id);
  };

  return (
    <li className={`card card-${nameOfCards} ${classCard}`} onClick={clickCard}>
      <img src={images} alt={descr} />
    </li>
  )
}



export default CardCpomponent;