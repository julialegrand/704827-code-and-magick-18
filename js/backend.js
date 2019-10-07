'use strict';

var userDialog = document.querySelector('.setup');
var form = userDialog.querySelector('.setup-wizard-form');

window.save = function (formData, onLoad, onError) {
  var URL = 'https://js.dump.academy/code-and-magick';
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
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
    xhr.timeout = 10000; // 10s
  });

  xhr.open('POST', URL);
  xhr.send(formData);
};

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  window.save(new FormData(form), function () {
    userDialog.classList.add('hidden');
  }, window.errorHandler);
});

window.load = function (onLoad, onError) {
  var URL = 'https://js.dump.academy/code-and-magick/data';
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
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
    xhr.timeout = 10000; // 10s
  });

  xhr.open('GET', URL);
  xhr.send();
};

window.errorHandler = function (errorMessage) {
  var node = document.createElement('div');
  node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: grey;';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = '40px';
  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
};

