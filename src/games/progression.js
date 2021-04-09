import gameEngine from '../index.js';
import { getRandomInt } from '../utils.js';

const gameRule = 'What number is missing in the progression?';

const makeProgression = (length, step) => {
  const progression = [];
  let member = getRandomInt();
  for (let i = 0; i < length; i += 1) {
    progression.push(member);
    member += step;
  }
  return progression;
};

const gameData = () => {
  const lengthOfProgression = 10; // how many members in progression
  const step = getRandomInt(10); // step of progression

  const progression = makeProgression(lengthOfProgression, step);
  const randomIndex = getRandomInt(progression.length - 1);
  const answer = String(progression.splice(randomIndex, 1, '..')[0]);
  const question = progression.join(' ');

  return [question, answer];
};

export default () => gameEngine(gameData, gameRule);
