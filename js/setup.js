'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');
  document.querySelector('.setup-similar').classList.remove('hidden');

  // var playerNames = [
  //   'Иван',
  //   'Хуан',
  //   'Себастьян',
  //   'Мария',
  //   'Кристоф',
  //   'Виктор',
  //   'Юлия',
  //   'Люпита',
  //   'Вашингтон'
  // ];
  // var surNames = [
  //   'да Марья',
  //   'Верон',
  //   'Мирабелла',
  //   'Вальц',
  //   'Онопко',
  //   'Топольницкая',
  //   'Нионго',
  //   'Ирвинг'
  // ];
  // var colors = [
  //   'rgb(101, 137, 164)',
  //   'rgb(241, 43, 107)',
  //   'rgb(146, 100, 161)',
  //   'rgb(56, 159, 117)',
  //   'rgb(215, 210, 55)',
  //   'rgb(0, 0, 0)'
  // ];
  // var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

  // window.random = function (min, max) {
  //   if (max === undefined) {
  //     max = min;
  //     min = 0;
  //   }
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // };

  // var generatePlayers = function (arrayName, arraySur, arrayColor, arrayEyes) {
  //   var players = [];

  //   for (var i = 0; i <= 3; i++) {
  //     var namerand = window.random(arrayName.length - 1);
  //     var surand = window.random(arraySur.length - 1);
  //     var colorrand = window.random(arrayColor.length - 1);
  //     var eyesrand = window.random(arrayEyes.length - 1);
  //     var gamePlayer = {
  //       name: arrayName[namerand] + ' ' + arraySur[surand],
  //       coatColor: arrayColor[colorrand],
  //       eyesColor: arrayEyes[eyesrand]
  //     };
  //     players.push(gamePlayer);
  //   }
  //   return players;
  // };
  var renderWizard = function (player) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = player.name;
    wizardElement.querySelector('.wizard-coat').style.fill = player.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = player.colorEyes;

    return wizardElement;
  };

  // var igroki = generatePlayers(playerNames, surNames, colors, eyesColor);


  window.successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.load(window.successHandler, window.errorHandler);

})();

