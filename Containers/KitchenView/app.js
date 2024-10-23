const express = require('express');
const app = express();
const port = process.env.PORT || 4000;


const ordersRouter = require('./routes/orders');


app.use(express.json());


app.use('/', ordersRouter);


if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`KitchenView app listening at http://localhost:${port}`);
  });
}


module.exports = app;
