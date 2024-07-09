import { useEffect } from "react";


export function TimerEnd({ userLost, timer, setTimer, gameWin }) {

  useEffect(() => {
    if (timer === 0 && !gameWin) {
      userLost(true);
      return;
    } else {
      const countDown = setInterval(() => {
        setTimer(prevTimer => {
          if (gameWin) {
            clearInterval(countDown);
            userLost(false);
            return 0;
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);

      return () => {
        clearInterval(countDown);
      };
    }
  }, [userLost, timer, setTimer, gameWin]);

  return (
    <>
      <div className="counter">
        <p className="counter-text">Оставшееся время:</p>
        <div className="counter-field">
          <span className="counter-field__time">{timer}</span> секунд
        </div>
      </div>
    </>
  );
}