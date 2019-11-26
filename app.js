import QrScanner from './node_modules/qr-scanner/qr-scanner.min.js';
QrScanner.WORKER_PATH = './node_modules/qr-scanner/qr-scanner-worker.min.js';
const fileSelector = document.getElementById('file-selector');

// navigator.getUserMedia

// ####### File Scanning #######
fileSelector.addEventListener('change', event => {
  const file = fileSelector.files[0];
  if (!file) {
    return;
  }
  QrScanner.scanImage(file)
    .then(result => console.log(result))
    .catch(e => setResult(fileQrResult, e || 'No QR code found.'));
});

console.log('THIS IS WORKING');

// import QrScanner from '../qr-scanner.min.js';
// QrScanner.WORKER_PATH = '../path/to/qr-scanner-worker.min.js';

// const qrScanner = new QrScanner(videoElem, result => console.log('decoded qr code:', result));
// QrScanner.scanImage(image)
//   .then(result => console.log(result))
//   .catch(error => console.log(error || 'No QR code found.'));
