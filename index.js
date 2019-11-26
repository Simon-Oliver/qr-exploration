var QRCode = require('qrcode');

const user = {
  id: 'qr567nlk777PvhJK',
  name: 'Simon',
  age: 28,
  position: 'admin'
};

const test = JSON.stringify(user);

QRCode.toFile('foo.png', test, { type: 'terminal' }, function(err, url) {
  console.log(url);
});
