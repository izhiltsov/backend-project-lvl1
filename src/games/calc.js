import gameEngine from '../index.js';
import { getRandomInt } from '../utils.js';

const gameRule = 'What is the result of the expression?';

const calculator = (num1, num2, operand) => {
  switch (operand) {
    case '*': return num1 * num2;
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    default:
      throw new Error(`Unknown operand state: '${operand}'!`);
  }
};

const gameData = () => {
  const maxRandomNumber = 10;
  const num1 = getRandomInt(maxRandomNumber);
  const num2 = getRandomInt(maxRandomNumber);
  const operands = ['*', '+', '*'];
  const randomIndex = getRandomInt(operands.length);
  const operand = operands[randomIndex];
  const question = `${num1} ${operand} ${num2}`;
  const answer = String(calculator(num1, num2, operand));

  return [question, answer];
};

export default () => gameEngine(gameData, gameRule);
