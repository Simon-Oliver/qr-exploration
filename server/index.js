const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
var multer = require('multer');

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
    cb(null, 'files/');
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
  res.send(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
