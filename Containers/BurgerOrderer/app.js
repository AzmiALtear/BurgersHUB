const express = require('express');
const app = express();
app.use(express.static('public'));

const indexRoutes = require('./src/routes/index');  
const orderRoutes = require('./src/routes/order'); 
const menuRoutes = require('./src/routes/menu');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoutes);  
app.use('/menu', menuRoutes); 
app.use('/', orderRoutes);  

// Starta servern endast om vi inte är i testmiljön
if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app; 