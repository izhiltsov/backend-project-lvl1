import runGame from '../index.js';
import { getRandomInt } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };
  const maxRandomNumber = 20;
  const num1 = getRandomInt(maxRandomNumber);
  const num2 = getRandomInt(maxRandomNumber);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));

  return [question, answer];
};

export default () => runGame(getGameData, description);
