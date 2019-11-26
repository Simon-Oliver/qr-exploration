var QrCode = require('qrcode-reader');
const stream = require('stream');
var Jimp = require('jimp');
var fs = require('fs');
var buffer = fs.readFileSync(__dirname + '/test_1.jpg');
const jsQR = require('jsqr');

Jimp.read(buffer, async function(err, image) {
  const value = jsQR(image.bitmap.data, image.bitmap.width, image.bitmap.height);
  const data = JSON.parse(value.data);
  const dir = './user/' + data.id;

  fs.mkdir(dir, { recursive: true }, err => {
    if (err) throw err;
  });
});
