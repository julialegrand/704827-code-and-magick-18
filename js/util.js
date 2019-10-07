'use strict';

window.util = {
  ESC_KEYCODE: 27,
  ENTER_KEYCODE: 13
};

window.random = function (min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
