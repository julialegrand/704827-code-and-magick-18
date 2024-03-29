'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');
  document.querySelector('.setup-similar').classList.remove('hidden');

  var renderWizard = function (player) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = player.name;
    wizardElement.querySelector('.wizard-coat').style.fill = player.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = player.colorEyes;

    return wizardElement;
  };


  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();

    var takeNumber = wizards.length > 4 ? 4 : wizards.length;
    similarListElement.innerHTML = '';

    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.setup = {
    renderWizards: renderWizards
  };
})();

