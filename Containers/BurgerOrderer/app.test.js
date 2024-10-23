const request = require('supertest');
const app = require('./app'); // Import your Express app
const db = require('../MenuStore/config/db'); // Import your MySQL connection

// Close the MySQL connection after all tests have completed
afterAll(() => {
  db.end((err) => {
    if (err) {
      console.error('Error closing the MySQL connection:', err);
    }
  });
});

describe('Order Endpoints', () => {
  it('should place a new order', async () => {
    const res = await request(app)
      .post('/order') 
      .send({
        customerName: 'Jane Doe',
        items: [
          { name: 'Cheese Deluxe', quantity: 1, customizations: {} }, 
          { name: 'French Fries', quantity: 1 }
        ],
      });
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Order submitted to KitchenView'); 
  });
});

describe('Menu API Endpoints', () => {
  it('should fetch all menu items', async () => {
    const res = await request(app).get('/menu');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Full Menu');
  });
});
