'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var playerNames = [
  'Иван',
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var surNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var colors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var generatePlayers = function (arrayName, arraySur, arrayColor, arrayEyes) {
  var players = [];

  for (var i = 0; i <= 3; i++) {
    var namerand = Math.floor(Math.random() * arrayName.length);
    var surand = Math.floor(Math.random() * arraySur.length);
    var colorrand = Math.floor(Math.random() * arrayColor.length);
    var eyesrand = Math.floor(Math.random() * arrayEyes.length);

    var gamePlayer = {
      name: arrayName[namerand] + ' ' + arraySur[surand],
      coatColor: arrayColor[colorrand],
      eyesColor: arrayEyes[eyesrand]
    };

    players.push(gamePlayer);
  }
  return players;
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var renderWizard = function (player) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = player.name;
  wizardElement.querySelector('.wizard-coat').style.fill = player.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = player.eyesColor;

  return wizardElement;
};

var igroki = generatePlayers(playerNames, surNames, colors, eyesColor);

var fragment = document.createDocumentFragment();
for (var i = 0; i < igroki.length; i++) {
  fragment.appendChild(renderWizard(igroki[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// Окно .setup должно открываться по нажатию на блок .setup-open.
// Открытие окна производится удалением класса hidden у блока.
// Окно .setup должно закрываться по нажатию на элемент .setup-close, расположенный внутри окна.

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUsernameInput = setup.querySelector('.setup-user-name');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', function (evt) {
    var currentEl = evt.target;
    if (evt.keyCode === ESC_KEYCODE && currentEl !== setupUsernameInput) {
      setup.classList.add('hidden');
    }
    if (evt.keyCode === ENTER_KEYCODE && currentEl === setupClose) {
      setup.classList.add('hidden');
    }
  });
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    setup.classList.remove('hidden');
  }
});


// Третья часть-Изменения цветов персонажа .

var arrayColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var arrayEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var arrayBall = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupBall = document.querySelector('.setup-fireball-wrap');
var setupParent = document.querySelector('.setup-wizard-appearance');
var ballHiddenInput = setupBall.querySelector('input');
var coatHiddenInput = setupParent.querySelector('input[name="coat-color"]');
var eyesHiddenInput = setupParent.querySelector('input[name="eyes-color" ]');

wizardCoat.addEventListener('click', function (evt) {
  var el = evt.target;
  var colorRan = random(arrayColor.length - 1);
  el.style.fill = arrayColor[colorRan];
  coatHiddenInput.value = arrayColor[colorRan];
});

wizardEyes.addEventListener('click', function (evt) {
  var el = evt.target;
  var colorRan = random(arrayEyes.length - 1);
  el.style.fill = arrayEyes[colorRan];
  eyesHiddenInput.value = arrayEyes[colorRan];
});

setupBall.addEventListener('click', function () {
  var colorRan = random(arrayBall.length - 1);
  setupBall.style.background = arrayBall[colorRan];
  ballHiddenInput.value = arrayBall[colorRan];
});
