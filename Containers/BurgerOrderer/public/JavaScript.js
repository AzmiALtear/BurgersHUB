


// JavaScript function to update burger customizations 
function updateBurgerCustomizations() {
    const burgerSelect = document.getElementById("burgerSelect").value;
    const burgerCustomizationDiv = document.getElementById("burgerCustomization");
    let customizations = "";
  
    if (burgerSelect === "Cheese Deluxe") {
      customizations = `
        <label>Customize Cheese Deluxe:</label><br>
        <input type="checkbox" name="items[0][customizations][onions]" value="no"> No Onions<br>
        <input type="checkbox" name="items[0][customizations][cheese]" value="extra"> Extra Cheese<br>
        <input type="checkbox" name="items[0][customizations][bacon]" value="extra"> Extra Bacon<br>
        <input type="number" name="items[0][quantity]" min="1" placeholder="Quantity">
      `;
    } else if (burgerSelect === "BBQ Bacon Burger") {
      customizations = `
        <label>Customize BBQ Bacon Burger:</label><br>
        <input type="checkbox" name="items[0][customizations][bbqSauce]" value="extra"> Extra BBQ Sauce<br>
        <input type="checkbox" name="items[0][customizations][onions]" value="no"> No Onions<br>
        <input type="checkbox" name="items[0][customizations][bacon]" value="extra"> Extra Bacon<br>
        <input type="number" name="items[0][quantity]" min="1" placeholder="Quantity">
      `;
    } else if (burgerSelect === "Veggie Delight") {
      customizations = `
        <label>Customize Veggie Delight:</label><br>
        <input type="checkbox" name="items[0][customizations][avocado]" value="extra"> Extra Avocado<br>
        <input type="checkbox" name="items[0][customizations][halloumi]" value="extra"> Extra Halloumi<br>
        <input type="checkbox" name="items[0][customizations][noSauce]" value="no"> No Sauce<br>
        <input type="number" name="items[0][quantity]" min="1" placeholder="Quantity">
      `;
    }
  
    burgerCustomizationDiv.innerHTML = customizations;
  }
  
// JavaScript function to update chicken customizations dynamically
function updateChickenCustomizations() {
  const chickenSelect = document.getElementById("chickenSelect").value;
  const chickenCustomizationDiv = document.getElementById("chickenCustomization");
  let customizations = "";

  if (chickenSelect === "Crispy Chicken Sandwich") {
    customizations = `
      <label>Customize Crispy Chicken Sandwich:</label><br>
      <input type="checkbox" name="items[1][customizations][lettuce]" value="no"> No Lettuce<br>
      <input type="checkbox" name="items[1][customizations][mayo]" value="extra"> Extra Mayo<br>
      <input type="checkbox" name="items[1][customizations][pickles]" value="extra"> Extra Pickles<br>
      <input type="number" name="items[1][quantity]" min="1" placeholder="Quantity">
    `;
  } else if (chickenSelect === "Grilled Chicken Burger") {
    customizations = `
      <label>Customize Grilled Chicken Burger:</label><br>
      <input type="checkbox" name="items[1][customizations][avocado]" value="extra"> Extra Avocado<br>
      <input type="checkbox" name="items[1][customizations][lettuce]" value="no"> No Lettuce<br>
      <input type="checkbox" name="items[1][customizations][tomato]" value="no"> No Tomato<br>
      <input type="number" name="items[1][quantity]" min="1" placeholder="Quantity">
    `;
  }

  chickenCustomizationDiv.innerHTML = customizations;
}

// JavaScript function to update fish customizations dynamically
function updateFishCustomizations() {
  const fishSelect = document.getElementById("fishSelect").value;
  const fishCustomizationDiv = document.getElementById("fishCustomization");
  let customizations = "";

  if (fishSelect === "Fish & Chips") {
    customizations = `
      <label>Customize Fish & Chips:</label><br>
      <input type="checkbox" name="items[2][customizations][tartarSauce]" value="extra"> Extra Tartar Sauce<br>
      <input type="checkbox" name="items[2][customizations][lemon]" value="extra"> Extra Lemon<br>
      <input type="number" name="items[2][quantity]" min="1" placeholder="Quantity">
    `;
  } else if (fishSelect === "Grilled Salmon Burger") {
    customizations = `
      <label>Customize Grilled Salmon Burger:</label><br>
      <input type="checkbox" name="items[2][customizations][dillMayo]" value="extra"> Extra Dill Mayo<br>
      <input type="checkbox" name="items[2][customizations][noTomato]" value="no"> No Tomato<br>
      <input type="number" name="items[2][quantity]" min="1" placeholder="Quantity">
    `;
  }

  fishCustomizationDiv.innerHTML = customizations;
}
// function to update KidsMenu customizations 
function updateKidsMenuCustomizations() {
  const kidsSelect = document.getElementById("kidsSelect").value;
  const kidsCustomizationDiv = document.getElementById("kidsCustomization");
  let customizations = "";

  if (kidsSelect === "Kids' Cheeseburger") {
    customizations = `
      <label>Customize Kids' Cheeseburger:</label><br>
      <input type="checkbox" name="items[3][customizations][ketchup]" value="no"> No Ketchup<br>
      <input type="checkbox" name="items[3][customizations][cheese]" value="extra"> Extra Cheese<br>
      <input type="number" name="items[3][quantity]" min="1" placeholder="Quantity">
    `;
  } else if (kidsSelect === "Chicken Nuggets") {
    customizations = `
      <label>Customize Chicken Nuggets:</label><br>
      <input type="checkbox" name="items[3][customizations][bbqSauce]" value="yes"> Add BBQ Sauce<br>
      <input type="checkbox" name="items[3][customizations][ketchup]" value="yes"> Add Ketchup<br>
      <input type="number" name="items[3][quantity]" min="1" placeholder="Quantity">
    `;
  }

  kidsCustomizationDiv.innerHTML = customizations;
}
// function to update Salad customizations 
function updateSaladCustomizations() {
  const saladSelect = document.getElementById("saladSelect").value;
  const saladCustomizationDiv = document.getElementById("saladCustomization");
  let customizations = "";

  if (saladSelect === "Caesar Salad") {
    customizations = `
      <label>Customize Caesar Salad:</label><br>
      <input type="checkbox" name="items[4][customizations][extraCroutons]" value="yes"> Extra Croutons<br>
      <input type="checkbox" name="items[4][customizations][extraParmesan]" value="yes"> Extra Parmesan<br>
      <input type="number" name="items[4][quantity]" min="1" placeholder="Quantity">
    `;
  } else if (saladSelect === "Greek Salad") {
    customizations = `
      <label>Customize Greek Salad:</label><br>
      <input type="checkbox" name="items[4][customizations][olives]" value="extra"> Extra Olives<br>
      <input type="checkbox" name="items[4][customizations][feta]" value="extra"> Extra Feta Cheese<br>
      <input type="number" name="items[4][quantity]" min="1" placeholder="Quantity">
    `;
  }

  saladCustomizationDiv.innerHTML = customizations;
}
// function to update Sides customizations
function updateSidesCustomizations() {
  const sidesSelect = document.getElementById("sidesSelect").value;
  const sidesCustomizationDiv = document.getElementById("sidesCustomization");
  let customizations = "";

  if (sidesSelect === "French Fries") {
    customizations = `
      <label>Customize French Fries:</label><br>
      <input type="checkbox" name="items[6][customizations][extraSalt]" value="extra"> Extra Salt<br>
      <input type="checkbox" name="items[6][customizations][ketchup]" value="yes"> Add Ketchup<br>
      <input type="number" name="items[6][quantity]" min="1" placeholder="Quantity">
    `;
  } else if (sidesSelect === "Chicken Wings") {
    customizations = `
      <label>Customize Chicken Wings:</label><br>
      <input type="radio" name="items[6][customizations][sauce]" value="BBQ"> BBQ Sauce<br>
      <input type="radio" name="items[6][customizations][sauce]" value="spicy"> Spicy Sauce<br>
      <input type="number" name="items[6][quantity]" min="1" placeholder="Quantity">
    `;
  } else if (sidesSelect === "Mozzarella Sticks") {
    customizations = `
      <label>Customize Mozzarella Sticks:</label><br>
      <input type="checkbox" name="items[6][customizations][marinaraSauce]" value="extra"> Extra Marinara Sauce<br>
      <input type="checkbox" name="items[6][customizations][cheese]" value="extra"> Extra Cheese<br>
      <input type="number" name="items[6][quantity]" min="1" placeholder="Quantity">
    `;
  }

  sidesCustomizationDiv.innerHTML = customizations;
}

// function to update Dessert customizations 
function updateDessertCustomizations() {
  const dessertSelect = document.getElementById("dessertSelect").value;
  const dessertCustomizationDiv = document.getElementById("dessertCustomization");
  let customizations = "";

  if (dessertSelect === "Vanilla Ice Cream") {
    customizations = `
      <label>Choose toppings for Vanilla Ice Cream:</label><br>
      <input type="checkbox" name="items[5][customizations][chocolateSauce]" value="extra"> Extra Chocolate Sauce<br>
      <input type="checkbox" name="items[5][customizations][sprinkles]" value="extra"> Sprinkles<br>
      <input type="number" name="items[5][quantity]" min="1" placeholder="Quantity">
    `;
  } else if (dessertSelect === "Chocolate Brownie Sundae") {
    customizations = `
      <label>Choose toppings for Chocolate Brownie Sundae:</label><br>
      <input type="checkbox" name="items[5][customizations][caramelSauce]" value="extra"> Extra Caramel Sauce<br>
      <input type="checkbox" name="items[5][customizations][nuts]" value="extra"> Add Nuts<br>
      <input type="number" name="items[5][quantity]" min="1" placeholder="Quantity">
    `;
  }

  dessertCustomizationDiv.innerHTML = customizations;
}
// function to update Drinks customizations 
function updateDrinksCustomizations() {
  const drinkSelect = document.getElementById("drinkSelect").value;
  const drinkCustomizationDiv = document.getElementById("drinkCustomization");
  let customizations = "";

  if (drinkSelect === "Soda") {
    customizations = `
      <label>Choose a flavor for Soda:</label><br>
      <select name="items[7][customizations][flavor]">
        <option value="Coke">Coke</option>
        <option value="Fanta">Fanta</option>
        <option value="Sprite">Sprite</option>
      </select><br>
      <label>Choose a size:</label><br>
      <select name="items[7][customizations][size]">
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select><br>
      <input type="number" name="items[7][quantity]" min="1" placeholder="Quantity">
    `;
  } else if (drinkSelect === "Milkshake") {
    customizations = `
      <label>Choose a flavor for Milkshake:</label><br>
      <select name="items[7][customizations][flavor]">
        <option value="Strawberry">Strawberry</option>
        <option value="Chocolate">Chocolate</option>
        <option value="Vanilla">Vanilla</option>
      </select><br>
      <label>Choose a size:</label><br>
      <select name="items[7][customizations][size]">
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select><br>
      <input type="number" name="items[7][quantity]" min="1" placeholder="Quantity">
    `;
  } else {
    // For simple drinks without flavors like Coffee, Espresso, etc.
    customizations = `
      <label>Choose a size:</label><br>
      <select name="items[7][customizations][size]">
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select><br>
      <input type="number" name="items[7][quantity]" min="1" placeholder="Quantity">
    `;
  }

  drinkCustomizationDiv.innerHTML = customizations;
}
