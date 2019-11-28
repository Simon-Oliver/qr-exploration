import QrScanner from '../node_modules/qr-scanner/qr-scanner.min.js';
QrScanner.WORKER_PATH = '../node_modules/qr-scanner/qr-scanner-worker.min.js';
const fileSelector = document.getElementById('file-selector');

fileSelector.addEventListener('change', event => {
  event.preventDefault();
  console.log('Change');

  // This assumes the form's name is `myForm`
  var formData = new FormData();

  formData.append('image', fileSelector.files[0]);
  console.log(fileSelector.files[0]);
  fetch('http://127.0.0.1:3000/img', {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(data => console.log(data));

  // const file = fileSelector.files[0];
  //   console.log('THIS IS WORKING');
  //   if (!file) {
  //     return;
  //   }
  // QrScanner.scanImage(file)
  //   .then(result => console.log(result))
  //   .catch(e => setResult(fileQrResult, e || 'No QR code found.'));
});

fetch('http://127.0.0.1:3000/data')
  .then(res => res.json())
  .then(data => console.log(data));

// import QrScanner from '../qr-scanner.min.js';
// QrScanner.WORKER_PATH = '../path/to/qr-scanner-worker.min.js';

// const qrScanner = new QrScanner(videoElem, result => console.log('decoded qr code:', result));
// QrScanner.scanImage(image)
//   .then(result => console.log(result))
//   .catch(error => console.log(error || 'No QR code found.'));
