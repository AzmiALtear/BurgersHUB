-- insert data till burgers tabel 
INSERT INTO burgers (name, description, price)
VALUES 
('Classic Burger', 'A classic beef burger with juicy beef patty, cheddar cheese, lettuce, tomato, and onions', 85.00),
('Cheese Deluxe', 'Extra cheddar, beef patty, bacon, lettuce, tomato, and special sauce', 95.00),
('BBQ Bacon Burger', 'Grilled beef burger with crispy bacon, BBQ sauce, red onions, and cheddar cheese', 105.00),
('Veggie Delight', 'Vegetarian burger with grilled halloumi, avocado, arugula, and tomato', 95.00);


-- insert data till chicken tabel 
INSERT INTO chicken_menu (name, description, price)
VALUES 
('Crispy Chicken Sandwich', 'Crispy fried chicken breast with lettuce, tomato, and mayo on a brioche bun', 95.00),
('Spicy Chicken Burger', 'Spicy fried chicken fillet with pickles, lettuce, and special sauce', 100.00),
('Grilled Chicken Burger', 'Grilled chicken breast with avocado, lettuce, and garlic mayo', 105.00);

-- insert data till fish tabel 
INSERT INTO fish_menu (name, description, price)
VALUES 
('Fish & Chips', 'Crispy fried fish fillets served with fries and tartar sauce', 110.00),
('Grilled Salmon Burger', 'Grilled salmon patty with lettuce, tomato, and dill mayo', 120.00),
('Fish Tacos', 'Soft tacos filled with crispy fried fish, cabbage, and lime dressing', 95.00);

-- insert data till kids tabel 
INSERT INTO kids_menu (name, description, price)
VALUES 
('Cheeseburger', 'Small cheeseburger served with fries and a drink', 65.00),
('Chicken Nuggets', 'Crispy chicken nuggets served with fries and a drink', 60.00),
('Mini Veggie Burger', 'Small vegetarian burger served with fries and a drink', 60.00);

-- insert data till salads tabel
INSERT INTO salads_menu (name, description, price)
VALUES 
('Caesar Salad', 'Classic Caesar salad with romaine lettuce, parmesan, croutons, and Caesar dressing', 75.00),
('Chicken Caesar Salad', 'Caesar salad with grilled chicken breast, parmesan, croutons, and Caesar dressing', 95.00),
('Greek Salad', 'Fresh Greek salad with feta cheese, olives, cucumber, tomato, and red onion', 85.00),
('Avocado & Quinoa Salad', 'Healthy salad with avocado, quinoa, spinach, and lime vinaigrette', 95.00);


-- insert data till dessert tabel 
INSERT INTO desserts_menu (name, description, price)
VALUES 
('Vanilla Ice Cream', 'Classic vanilla ice cream served with chocolate sauce', 40.00),
('Chocolate Brownie Sundae', 'Warm chocolate brownie served with vanilla ice cream and caramel sauce', 55.00),
('Apple Pie', 'Homemade apple pie served with a scoop of vanilla ice cream', 50.00),
('Cheesecake', 'Creamy New York-style cheesecake with a raspberry topping', 60.00);

-- insert data till sides tabel
INSERT INTO sides (name, description, price)
VALUES 
('French Fries', 'Classic crispy fries', 35.00),
('Sweet Potato Fries', 'Crispy sweet potato fries', 40.00),
('Onion Rings', 'Fried onion rings served with dip', 30.00),
('Mozzarella Sticks', 'Fried mozzarella sticks served with marinara sauce', 45.00),
('Chicken Wings', 'Crispy chicken wings with your choice of BBQ or spicy sauce', 55.00);


-- insert data till drinks tabel  
INSERT INTO drinks (name, price)
VALUES 
('Soda (Coke, Fanta, Sprite)', 25.00),
('Sparkling Water', 20.00),
('Milkshake (Strawberry, Chocolate, Vanilla)', 40.00),
('Iced Tea', 30.00);
