const express = require('express');
const cors = require('cors');
const multer = require('multer');
var Jimp = require('jimp');
var fs = require('fs');
const jsQR = require('jsqr');

const app = express();
const port = 3000;

app.use(
  cors({
    credentials: true,
    origin: true
  })
);

app.use(express.json());
app.use(express.urlencoded());

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'files/temp');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname); // modified here  or user file.mimetype
  }
});

var upload = multer({ storage: storage });

app.get('/data', (req, res) => res.send({ message: 'Hello World!' }));

app.post('/img', upload.single('image'), (req, res, next) => {
  // req.file is the `avatar` file
  console.log('/img FIRED');
  console.log(req.file);
  // req.body will hold the text fields, if there were any
  console.log(__dirname);
  var buffer = fs.readFileSync(__dirname + '/' + req.file.path);

  Jimp.read(buffer, async function(err, image) {
    const value = jsQR(image.bitmap.data, image.bitmap.width, image.bitmap.height);
    const data = JSON.parse(value.data);

    console.log(data);
    res.json({ ...data });
  });

  fs.unlink(__dirname + '/' + req.file.path, err => {
    if (err) {
      console.error(err);
      return;
    }

    //file removed
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
