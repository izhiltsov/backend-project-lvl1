import { getUserAnswer, getUserName } from './cli.js';

const gameEngine = (gameData, gameRule) => {
  const userName = getUserName();
  console.log(gameRule);

  const playCount = 3;
  for (let i = 0; i < playCount; i += 1) {
    const [question, correctAnswer] = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer is '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
