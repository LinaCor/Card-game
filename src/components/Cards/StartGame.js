import './css/style.css';
import { typeOfGame } from './data';

export function StartGame({ decideCards }) {
  function getKeyValue(obj, value) {
    return Object.keys(obj).find((el) => obj[el] === value);
  }

  function clicGame(evt) {
    const value = evt.target.textContent;
    const keyCard = getKeyValue(typeOfGame, value);
    decideCards(keyCard);
  }

  return (
    <section className="rules">
      <h2>Приветствуем вас в игре "Собери пару"!</h2>
      <div className="rules-panel">
        <p>Правила просты: вам необходимо открыть все одинаковые карточки</p>
      </div>
      <div className="rules-choise">
        <p style={{ marginBottom: 20 }}><span>Выберите тип игры:</span></p>
        <button className="btn rules-choise__btn" type="button" onClick={clicGame}>На время</button>
        <button className="btn rules-choise__btn" type="button" onClick={clicGame}>На ошибки</button>
      </div>
    </section>
  );
}