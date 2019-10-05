'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUsernameInput = setup.querySelector('.setup-user-name');
  var dialogHandler = setup.querySelector('.upload');

  var showSetup = function () {
     setup.classList.remove('hidden');
  };
  var closeSetup = function () {
     setup.classList.add('hidden');
     setup.removeAttribute('style');
  };

  // открытие
  setupOpen.addEventListener('click', function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', function (evt) {
      var currentEl = evt.target;
      if ((evt.keyCode === window.util.ESC_KEYCODE && currentEl !== setupUsernameInput) || (evt.keyCode === window.util.ENTER_KEYCODE && currentEl === setupClose)) {
        closeSetup()
      }
    });
  });

  setupClose.addEventListener('click', closeSetup);

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      showSetup();
    }
  });

  // перетаскивание
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };
    var onMouseUp = function (evtUp) {
      evtUp.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evtClick) {
          evtClick.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
