import runGame from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'What number is missing in the progression?';

const makeProgression = (length, step) => {
  const progression = [];
  let member = getRandomInt();
  for (let i = 0; i < length; i += 1) {
    progression.push(member);
    member += step;
  }
  return progression;
};

const getGameData = () => {
  const progressionLength = 10;
  const step = getRandomInt(10);

  const progression = makeProgression(progressionLength, step);
  const randomIndex = getRandomInt(progression.length - 1);
  const answer = String(progression.splice(randomIndex, 1, '..')[0]);
  const question = progression.join(' ');

  return [question, answer];
};

export default () => runGame(getGameData, description);
