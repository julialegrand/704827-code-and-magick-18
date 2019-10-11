'use strict';


(function () {
  var TIME_OUT = 10000;
  var CASE_200 = 200;
  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');
  var xhrHandler = function (url, method, formData, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      if (xhr.status === CASE_200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });
      xhr.timeout = TIME_OUT;
    });
    xhr.open(method, url);
    xhr.send(formData);
  };
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: grey;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '40px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend = {
    xhrHandler: xhrHandler,
    errorHandler: errorHandler
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.xhrHandler('https://js.dump.academy/code-and-magick', 'POST', new FormData(form), function () {
      userDialog.classList.add('hidden');
    }, window.backend.errorHandler);
  });

})();
