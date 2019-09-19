'use strict';


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');


var playerNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
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
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


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

