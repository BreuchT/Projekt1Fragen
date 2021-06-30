// let unboxing;
// let boxing = [''];

let a = {};

//
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//
document.querySelector('.check').addEventListener('click', function () {
  let box = document.querySelector('.guess').value;

  if (box == 'hello' || box == 'Hello') {
    if (a.hello == 1) {
      displayMessage('hello again');
      delete a.hello;
    } else {
      a.hello = 1;
      displayMessage('Hi');
    }
  } else if (
    box == 'who are you?' ||
    box == 'Who are you?' ||
    box == 'who are you ?' ||
    box == 'Who are you ?'
  ) {
    if (a.who == 1) {
      displayMessage('you already asked');
      delete a.who;
    } else {
      a.who = 1;
      displayMessage('im not alexa');
    }
  } else if (
    box == 'how are you?' ||
    box == 'How are you?' ||
    box == 'how are you ?' ||
    box == 'How are you ?'
  ) {
    displayMessage('Im good and you?');
  } else if (box == 'im good') {
    displayMessage('Nice :)');
  } else if (box == 'im good too') {
    displayMessage('We are the same');
  } else if (box == 'good') {
    displayMessage('Sounds good');
  } else if (box == 'im bad') {
    displayMessage('Oh no :(');
  } else if (box == 'im not good') {
    displayMessage('bad bad bad :(');
  } else if (box == 'Bad') {
    displayMessage('OK :(');
  } else if (
    box == 'whats your name ?' ||
    'whats your name?' ||
    'Whats your name?' ||
    'Whats your name ?'
  ) {
    displayMessage('Fragian :)');
  } else if (box == 'Bad') {
    displayMessage('OK :(');
  } else if (box == '') {
    displayMessage('shut up');
  } else {
    displayMessage('I did not understand you');
  }
});
