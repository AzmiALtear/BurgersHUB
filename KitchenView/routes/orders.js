const express = require('express');
const router = express.Router();


let orders = [];

router.get('/', (req, res) => {
  const html = `
    <h1>Welcome to The KitchenView</h1>
    <ul>
      <li><a href="/orders">View Received Orders</a></li>
    </ul>
  `;
  res.send(html);
});

// API endpoint to receive orders from BurgerOrderer
router.post('/order', (req, res) => {
  const newOrder = req.body;

  console.log('Incoming order:', newOrder); 

  if (!newOrder || !newOrder.customerName || !newOrder.items) {
    console.log('Invalid order structure:', newOrder);
    return res.status(400).send('Invalid order received');
  }
  
  orders.push(newOrder);
  console.log('New order received:', newOrder);
  res.send('Order received by KitchenView');
});


// API endpoint to display all received orders in separate HTML tables
router.get('/orders', (req, res) => {
  let html = '<h1>Received Orders</h1>';
  
  if (orders.length > 0) {
    
    orders.forEach(order => {
      html += `<h2>Order from ${order.customerName}</h2>`;
      html += '<table border="1"><tr><th>Customer Name</th><th>Items</th><th>Customizations</th></tr>';
      order.items.forEach(item => {
        html += `<tr>
                   <td>${order.customerName}</td>
                   <td>${item.quantity} x ${item.name}</td>
                   <td>`;
        if (item.customizations) {
          html += '<ul>';
          for (const [key, value] of Object.entries(item.customizations)) {
            html += `<li>${key}: ${value}</li>`;
          }
          html += '</ul>';
        } else {
          html += 'No customizations';
        }

        html += `</td></tr>`;
      });
      html += '</table><br>';  
    });
  } else {
    html += '<p>No orders have been received yet.</p>';
  }

  html += '<br><a href="/">Back to Kitchen</a>';
  html += '<br><a href="http://localhost:3000" class="btn">Back to BurgersHUB</a>';
  res.send(html);
});


module.exports = router;
module.exports.orders = orders;
