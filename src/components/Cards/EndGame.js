import './css/style.css';
import arrow from '../Cards/img/middle-ages/arrow-to-menu.svg'
import reverse from '../Cards/img/middle-ages/reverse-game.svg'


export function EndGame({ children, backToMenu, restartGame }) {

  return (
    <section className="rules end-game">
      <h2>{children}</h2>
      <div className="rules-choise">
        <button className="btn rules-choise__btn btn-end" type="button" onClick={restartGame}>
          <img src={reverse} alt='icon' />
          <p style={{ fontSize: 14 }}>Начать заново</p>
        </button>
        <button className="btn rules-choise__btn btn-end" type="button" onClick={backToMenu}>
          <img src={arrow} alt='icon' />
          <p style={{ fontSize: 14 }}>На главную</p>
        </button>
      </div>
    </section>
  );
}