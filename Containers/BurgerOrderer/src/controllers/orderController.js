const axios = require('axios');
let currentOrder = [];

exports.submitOrder = async (req, res) => {
  const order = req.body;

  // Log the incoming order to check if it contains data
  console.log('Order received from form:', order); 

  // Kontrollera att ordern innehåller nödvändiga fält
  if (!order || !order.items || !order.customerName) {
    console.log('Invalid order data');
    return res.status(400).send('Invalid order data');
  }

  // Filtrera ut objekt som saknar namn (dvs. som inte är valda)
  currentOrder = order.items
    .filter(item => item.name && item.name !== '')  // Endast objekt med namn inkluderas
    .map(item => ({
      name: item.name,
      quantity: item.quantity,
      customizations: item.customizations || {}  // Lägg till anpassningar om de finns
    }));

  // Logga currentOrder för att verifiera filtreringen
  console.log('Filtered order:', currentOrder);

  // Skicka den filtrerade beställningen till KitchenView
  try {
    const response = await axios.post('http://localhost:4000/order', { 
      customerName: order.customerName, 
      items: currentOrder 
    });
    console.log('Order successfully sent to KitchenView:', response.data);
    res.send(`
      <h1>Order submitted to KitchenView</h1>
      <p>Your order has been successfully sent to the kitchen.</p>
      <a href="http://localhost:4000/orders" class="btn">Go to KitchenView</a>
    `);
  } catch (error) {
    console.error('Error sending order to KitchenView:', error);
    res.status(500).send('Error sending order to KitchenView');
  }
};





exports.orderform = (req, res) => {
  const html = `
    <h1>Order Items</h1>
    <form action="/order" method="post">
      <!-- Customer Name -->
      <label for="customerName">Customer Name:</label>
      <input type="text" id="customerName" name="customerName" required placeholder="Enter your name"><br><br>

      <!-- Burgers Menu -->
      <h2>Burgers</h2>
      <label for="burgerSelect">Choose a Burger:</label>
      <select id="burgerSelect" name="items[0][name]" onchange="updateBurgerCustomizations()">
        <option value="">Select a Burger</option>
        <option value="Cheese Deluxe">Cheese Deluxe</option>
        <option value="BBQ Bacon Burger">BBQ Bacon Burger</option>
        <option value="Veggie Delight">Veggie Delight</option>
        <option value="Classic Burger">Classic Burger</option>
      </select><br>

      <!-- Customizations for Burgers -->
      <div id="burgerCustomization">
      </div><br>
      

      <!-- Chicken Menu -->
      <h2>Chicken</h2>
      <label for="chickenSelect">Choose a Chicken Dish:</label>
      <select id="chickenSelect" name="items[1][name]" onchange="updateChickenCustomizations()">
        <option value="">Select a Chicken Dish</option>
        <option value="Crispy Chicken Sandwich">Crispy Chicken Sandwich</option>
        <option value="Grilled Chicken Burger">Grilled Chicken Burger</option>
        <option value="Spicy Chicken Burger">Spicy Chicken Burger</option>
      </select><br>

      <!-- Customizations for Chicken -->
      <div id="chickenCustomization">
        <!-- This will be filled dynamically by JavaScript -->
      </div><br>

      <!-- fish Menu -->
      
      <h2>fish</h2>
      <label for="fishSelect">Choose a fish Dish:</label>
      <select id="fishSelect" name="items[2][name]" onchange="updateFishCustomizations()">
        <option value="">Select a fish Dish</option>
        <option value="Fish & Chips"> Fish & Chips</option>
        <option value="Grilled Salmon Burger">Grilled Salmon Burger</option>
        <option value="Fish Tacos"> Fish Tacos</option>
      </select><br>

      <!-- Customizations for fish -->
      <div id="fishCustomization">
        <!-- This will be filled dynamically by JavaScript -->
      </div><br>

      <!-- Kids Menu -->
      
      <h2>Kids Menu</h2>
      <label for="kidsSelect">Choose a kids Dish:</label>
      <select id="kidsSelect" name="items[3][name]" onchange="updateKidsMenuCustomizations()">
        <option value="">Select a kids Dish</option>
        <option value="Kids' Cheeseburger"> Kids' Cheeseburger</option>
        <option value="Chicken Nuggets">Chicken Nuggets</option>
        <option value="Mini Veggie Burger ">Mini Veggie Burger </option>
      </select><br>

      <!-- Customizations for fish -->
      <div id="kidsCustomization">
      </div><br>

       <!-- Salads Menu -->
      
      <h2>Salads Menu</h2>
      <label for="saladSelect">Choose a Salads Dish:</label>
      <select id="saladSelect" name="items[4][name]" onchange="updateSaladCustomizations()">
        <option value="">Select a Salads Dish</option>
        <option value="Caesar Salad"> Caesar Salad </option>
        <option value="Greek Salad">Greek Salad</option>
        <option value="Chicken Caesar Salad"> Chicken Caesar Salad </option>
        <option value="Avocado & Quinoa Salad">Avocado & Quinoa Salad</option>
      </select><br>

      <!-- Customizations for fish -->
      <div id="saladCustomization">
      </div><br>

      <!-- Sides Menu-->
      <h2>Sides</h2>
      <label for="sidesSelect">Choose a Side:</label>
      <select id="sidesSelect" name="items[6][name]" onchange="updateSidesCustomizations()">
        <option value="">Select a Side</option>
        <option value="French Fries">French Fries</option>
        <option value="Sweet Potato Fries">Sweet Potato Fries</option>
        <option value="Onion Rings">Onion Rings</option>
        <option value="Mozzarella Sticks">Mozzarella Sticks</option>
        <option value="Chicken Wings">Chicken Wings</option>
      </select><br>
      <div id="sidesCustomization">
        <!-- Customizations will be inserted here -->
      </div><br>


      <!-- Desserts Menu-->
      
      <h2>Desserts Menu</h2>
      <label for="dessertSelect">Choose a Desserts Dish:</label>
      <select id="dessertSelect" name="items[5][name]" onchange="updateDessertCustomizations()">
        <option value="">Select a Desserts Dish</option>
        <option value="Vanilla Ice Cream"> Vanilla Ice Cream </option>
        <option value="Chocolate Brownie Sundae">Chocolate Brownie Sundae</option>
        <option value="Apple Pie"> Apple Pie </option>
        <option value="Cheesecake">Cheesecake</option>
      </select><br>

      <!-- Customizations for fish -->
      <div id="dessertCustomization">
      </div><br>


      <!-- Drinks Menu -->
      <h2>Drinks</h2>
      <label for="drinkSelect">Choose a Drink:</label>
      <select id="drinkSelect" name="items[7][name]" onchange="updateDrinksCustomizations()">
        <option value="">Select a Drink</option>
        <option value="Soda">Soda</option>
        <option value="Sparkling Water">Sparkling Water</option>
        <option value="Milkshake">Milkshake</option>
        <option value="Iced Tea">Iced Tea</option>
        <option value="Coffee">Coffee</option>
        <option value="Espresso">Espresso</option>
        <option value="Cappuccino">Cappuccino</option>
        <option value="Latte">Latte</option>
      </select><br>
      <div id="drinkCustomization">
      </div><br>


      <!-- Submit Order -->
      <button type="submit">Submit Order</button>
    </form><br>

    <a href="/">Back to Home</a>
    
    <script src="/JavaScript.js"></script>

    `;

  res.send(html);
};