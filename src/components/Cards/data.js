const darkMiddleAges = [{
  'id': '181e0411',
  'url': require('./img/middle-ages/dark/1-n.jpg'),
  'description': 'middle ages animals',
}, {
  'id': '7141d1ac',
  'url': require('./img/middle-ages/dark/2-n.jpg'),
  'description': 'middle ages animals',
}, {
  'id': '7233c7fd',
  'url': require('./img/middle-ages/dark/3-n.jpg'),
  'description': 'middle ages animals',
}, {
  'id': '61badfb1',
  'url': require('./img/middle-ages/dark/4-n.jpg'),
  'description': 'middle ages animals',
}, {
  'id': '955fc32b',
  'url': require('./img/middle-ages/dark/5-n.jpg'),
  'description': 'middle ages animals',
}, {
  'id': '85555dcd',
  'url': require('./img/middle-ages/dark/6-n.jpg'),
  'description': 'middle ages animals',
}];

const lightMiddleAges = [{
  'id': '181e0411',
  'url': require('./img/middle-ages/light/1-l.jpg'),
  'description': 'middle ages people',
}, {
  'id': '7141d1ac',
  'url': require('./img/middle-ages/light/2-l.jpg'),
  'description': 'middle ages people',
}, {
  'id': '7233c7fd',
  'url': require('./img/middle-ages/light/3-l.jpg'),
  'description': 'middle ages people',
}, {
  'id': '61badfb1',
  'url': require('./img/middle-ages/light/4-l.jpg'),
  'description': 'middle ages people',
}, {
  'id': '955fc32b',
  'url': require('./img/middle-ages/light/5-l.jpg'),
  'description': 'middle ages people',
}, {
  'id': '85555dcd',
  'url': require('./img/middle-ages/light/6-l.jpg'),
  'description': 'middle ages people',
}];



function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const middleAges = { darkMiddleAges, lightMiddleAges };

export function createCardField(nameOfCards) {
  const dubleArr = nameOfCards.slice();

  const copyArr = dubleArr.map((el) => {
    return {
      ...el,
      id: `${el.id}-1`
    }
  });

  const finishArr = nameOfCards.concat(copyArr);

  return shuffle(finishArr);
}


export const typeOfGame = {
  timer: 'На время', errors: 'На ошибки',
};

export const gameToggle = { BEGGIN: 'beggin', GAME_TIME: 'game time', GAME_ERROR: 'game error' };



