const express = require('express');
const cors = require('cors');

require('dotenv').config();

const { apiRouter } = require('./routes');
const { constant: { PORT } } = require('./constants');
const { errorMess: { UNKNOWN_ERROR } } = require('./errors');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);
app.use(_handleErrors);

// eslint-disable-next-line no-unused-vars
function _handleErrors(err, req, res, next) {
  // console.log(err);
  res
    .status(err.status)
    .json({
      status: err.status,
      message: err.message || UNKNOWN_ERROR.message,
      customCode: err.customCode,
    });
}

app.listen(PORT, () => {
  console.log(`app listen ${PORT} `);
});
