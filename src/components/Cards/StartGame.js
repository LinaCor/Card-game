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

    <section class="rules">
      <h2>Приветствуем вас в игре "Собери пару"!</h2>
      <div class="rules-panel">
        <p>Правила просты: вам необходимо открыть все одинаковые карточки</p>
      </div>
      <div class="rules-choise">
        <p><span>Выберите тип игры:</span></p>
        <button class="btn rules-choise__btn" type="button" onClick={clicGame}>На время</button>
        <button class="btn rules-choise__btn" type="button" onClick={clicGame}>На ошибки</button>
      </div>
    </section>

  );
}