import runGame from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const randomNumber = getRandomInt();
  const question = String(randomNumber);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runGame(getGameData, description);
