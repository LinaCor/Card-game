import { useState } from 'react';
import './css/style.css';

function CardCpomponent({ checkClick, finishedItems, typeOfCards }) {
  const TIMEOUT = 1500;
  const [visibles, setVisibles] = useState([]);

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


  return (
    <>
      <section class="game container">
        <ul class="cards cards-theme-cars">
          {typeOfCards.map((item) => <Card
            id={item.id}
            key={item.id}
            images={item.url}
            descr={item.description}
            isVisible={visibles.includes(item.id)}
            isFinished={finishedItems.includes(item.id)}
            checkLength={visibles.length}
            handleCardClick={handleCardClick}
          />)}
        </ul>
      </section>
    </>
  )

}


//отдельная карточка 
function Card({ id, images, descr, isVisible, isFinished, handleCardClick, checkLength }) {

  const errorcard = !isFinished && isVisible && checkLength === 2;

  const classCard = `${isVisible ? 'card-show' : ''} 
                    ${isFinished ? 'card-finished' : ''}
                    ${errorcard ? 'card-error' : ''}`;

  function clickCard() {
    handleCardClick(id);
  }
  return (
    <li className={`card ${classCard}`} onClick={clickCard}>
      <img src={images} alt={descr} />
    </li>
  )
}



export default CardCpomponent;