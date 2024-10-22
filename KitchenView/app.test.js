const request = require('supertest');
const express = require('express');
const app = express();
const kitchenRouter = require('./routes/orders'); 
const orders = require('./routes/orders').orders; 

app.use(express.json()); 
app.use('/', kitchenRouter);

describe('KitchenView Endpoints', () => {

  
  beforeEach(() => {
    orders.length = 0; 
  });

  // Test for the root endpoint
  it('should display the home page with a link to view orders', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Welcome to The KitchenView');
    expect(res.text).toContain('View Received Orders');
  });

  // Test for submitting a new order
  it('should receive a valid order and return a success message', async () => {
    const newOrder = {
      customerName: 'John Doe',
      items: [
        { name: 'Cheese Deluxe', quantity: 2, customizations: { cheese: 'extra' } },
        { name: 'French Fries', quantity: 1 },
      ],
    };
    const res = await request(app)
      .post('/order')
      .send(newOrder);

    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Order received by KitchenView');
  });

  // Test for submitting an invalid order
  it('should return a 400 status for an invalid order', async () => {
    const invalidOrder = {
      items: [{ name: 'Cheese Deluxe', quantity: 2 }], 
    };

    const res = await request(app)
      .post('/order')
      .send(invalidOrder);

    expect(res.statusCode).toEqual(400);
    expect(res.text).toEqual('Invalid order received');
  });

  // Test for displaying all received orders
  it('should display all received orders in HTML tables', async () => {
    const newOrder = {
      customerName: 'Jane Doe',
      items: [
        { name: 'BBQ Bacon Burger', quantity: 1, customizations: { bacon: 'extra crispy' } },
        { name: 'Onion Rings', quantity: 2 },
      ],
    };

 
    await request(app)
      .post('/order')
      .send(newOrder);

  
    const res = await request(app).get('/orders');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Order from Jane Doe');
    expect(res.text).toContain('BBQ Bacon Burger');
    expect(res.text).toContain('extra crispy');
  });

  // Test for displaying no orders message
  it('should display a message when no orders have been received', async () => {
    const res = await request(app).get('/orders');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('No orders have been received yet.');
  });
});
