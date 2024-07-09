import './css/style.css';
import arrow from '../Cards/img/middle-ages/arrow-to-menu.svg'
import reverse from '../Cards/img/middle-ages/reverse-game.svg'


export function EndGame({ backToMenu, restartGame, gameLose, gameWin }) {
  return (
    <div className={`mask-off ${gameLose || gameWin ? 'mask-on' : ''}`}>
      <section className="rules">
        <h2>{gameWin ? 'Поздравляем, вы успели открыть все карточки!' : 'Вы не успели отгадать все карточки :('}</h2>
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
    </div >
  );
}

