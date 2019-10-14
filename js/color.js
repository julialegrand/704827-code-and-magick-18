'use strict';

// Третья часть-Изменения цветов персонажа .

(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupBall = document.querySelector('.setup-fireball-wrap');
  var setupParent = document.querySelector('.setup-wizard-appearance');
  var ballHiddenInput = setupBall.querySelector('input');
  var coatHiddenInput = setupParent.querySelector('input[name="coat-color"]');
  var eyesHiddenInput = setupParent.querySelector('input[name="eyes-color" ]');

  var wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

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

  wizardCoat.addEventListener('click', function (evt) {
    var el = evt.target;
    var colorRan = window.random(arrayColor.length - 1);
    el.style.fill = arrayColor[colorRan];
    coatHiddenInput.value = arrayColor[colorRan];
    wizard.onCoatChange(arrayColor[colorRan]);
  });

  wizardEyes.addEventListener('click', function (evt) {
    var el = evt.target;
    var colorRan = window.random(arrayEyes.length - 1);
    el.style.fill = arrayEyes[colorRan];
    eyesHiddenInput.value = arrayEyes[colorRan];
    wizard.onEyesChange(arrayEyes[colorRan]);
  });

  setupBall.addEventListener('click', function () {
    var colorRan = window.random(arrayBall.length - 1);
    setupBall.style.background = arrayBall[colorRan];
    ballHiddenInput.value = arrayBall[colorRan];
  });

  window.wizard = wizard;
})();
