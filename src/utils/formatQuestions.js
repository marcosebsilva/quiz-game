/* eslint-disable no-param-reassign */
// shuffle algorithm from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function formatQuestions(questionsArray) {
  questionsArray.forEach((question) => {
    question.category = question.category.replace(/(Science: |Entertainment: )/, '');
    question.points = 0;
    question.chosen_answer = '';
    question.scrambled_answers = shuffle([question.correct_answer, ...question.incorrect_answers]);
    question.isLocked = false;
  });

  return questionsArray;
}
