'use strict';

const formData = document.querySelector('#add-bill');

function sendData(data) {
  console.log('Sending data');
}

formData.addEventListener('click', function () {
  sendData({ test: 'ok' });
});
