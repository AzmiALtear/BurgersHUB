const express = require('express');
const router = express.Router();

// Welcome page
router.get('/', (req, res) => {
  const html = `
    <html>
    <head>
      <link rel="stylesheet" type="text/css" href="/css/styles.css">
    </head>
    <body>
      <div class="welcome-container">
        <h1>Welcome to BurgersHUB</h1>
        <img src="/images/burger.jpg" alt="Burger Image" class="burger-image">
        <div class="button-container">
          <a href="/menu" class="btn">View Menu</a>
          <a href="/order-form" class="btn">Submit an Order</a>
          <a href="http://localhost:4000" class="btn">KitchenView</a>
        </div>
      </div>
    </body>
    </html>
  `;
  res.send(html);
});




module.exports = router;

