import gameEngine from '../index.js';
import { getRandomInt } from '../utils.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const gameData = () => {
  const randomNumber = getRandomInt();
  const answer = (isPrime(randomNumber)) ? 'yes' : 'no';
  const question = String(randomNumber);
  return [question, answer];
};

export default () => gameEngine(gameData, gameRule);
