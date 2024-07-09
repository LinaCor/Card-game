import { useState } from 'react';
import './css/style.css';
import arrow from '../Cards/img/middle-ages/arrow-to-menu.svg'
import { EndGame } from './EndGame';
import { TimerEnd } from './TimerEnd';
import { LiveEnd } from './LiveEnd';

function CardCpomponent({ checkClick, finishedItems, typeOfCards, backToMenu, nameCards, restartGame }) {

  const TIMEOUT = 1500;
  const [visibles, setVisibles] = useState([]);
  const [timer, setTimer] = useState(30);
  const [userLost, setUserLost] = useState();

  const gameWin = finishedItems.length === typeOfCards.length;
  const gameLose = finishedItems.length !== typeOfCards.length && timer === 0;


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
    setTimer(30);
  }


  return (
    <>
      <section className="game container">
        {nameCards === 'errors' ? <LiveEnd /> : <TimerEnd userLost={setUserLost} timer={timer} setTimer={setTimer} gameWin={gameWin} />}
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
            nameCards={nameCards}
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
function Card({ id, images, descr, isVisible, isFinished, handleCardClick, checkLength, nameCards }) {

  const errorcard = !isFinished && isVisible && checkLength === 2;
  const classCard = `${isVisible ? 'card-show' : ''} 
                    ${isFinished ? 'card-finished' : ''}
                    ${errorcard ? 'card-error' : ''}`;

  function clickCard() {
    handleCardClick(id);
  }
  return (
    <li className={`card card-${nameCards} ${classCard}`} onClick={clickCard}>
      <img src={images} alt={descr} />
    </li>
  )
}



export default CardCpomponent;