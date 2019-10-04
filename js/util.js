'use strict';


// Окно .setup должно открываться по нажатию на блок .setup-open.
// Открытие окна производится удалением класса hidden у блока.
// Окно .setup должно закрываться по нажатию на элемент .setup-close, расположенный внутри окна.


(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUsernameInput = setup.querySelector('.setup-user-name');

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE
  };
  setupOpen.addEventListener('click', function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', function (evt) {
      var currentEl = evt.target;
      if (evt.keyCode === window.util.ESC_KEYCODE && currentEl !== setupUsernameInput) {
        setup.classList.add('hidden');
      }
      if (evt.keyCode === window.util.ENTER_KEYCODE && currentEl === setupClose) {
        setup.classList.add('hidden');
      }
    });
  });

  setupClose.addEventListener('click', function () {
    setup.classList.add('hidden');
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      setup.classList.remove('hidden');
    }
  });
})();
