/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
// shuffle algorithm from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// thanks to insign from https://stackoverflow.com/questions/5796718/html-entity-decode
function decodeText(question) {
  const mockNode = document.createElement('textarea');

  mockNode.innerHTML = question.question;
  question.question = mockNode.value;

  mockNode.innerHTML = question.correct_answer;
  question.correct_answer = mockNode.value;

  question.scrambled_answers.forEach((answer, index) => {
    mockNode.innerHTML = answer;
    question.scrambled_answers[index] = mockNode.value;
  });
}

export default function formatQuestions(questionsArray) {
  questionsArray.forEach((question) => {
    question.category = question.category.replace(/(Science: |Entertainment: )/, '');
    question.points = 0;
    question.chosen_answer = '';
    question.scrambled_answers = shuffle([question.correct_answer, ...question.incorrect_answers]);
    question.isLocked = false;
    decodeText(question);
  });

  return questionsArray;
}
