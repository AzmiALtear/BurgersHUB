# BurgersHUB

Project Description
BurgersHUB is a web application system for ordering burgers, managing orders, and displaying them in the kitchen. The project consists of three main components, all running in separate Docker containers:

BurgerOrderer: The customer interface where orders can be placed.
MenuStore: A MySQL database that manages menu data and stores all available items.
KitchenView: An interface for the kitchen to display orders.
  
The project uses REST API-based communication between these components and handles session management to allow multiple customers to place orders simultaneously without issues.

Installation  
Steps to run the project locally:
1. Clone this repository:
git clone https://github.com/BurgersHUB.git
2. Install the necessary dependencies for each component:
npm install
Repeat this for both MenuStore and KitchenView.

3. To Run the applications: 
For BurgerOrderer (listening on port 3000):
node app.js
For KitchenView (listening on port 4000):
node app.js
Ensure that both BurgerOrderer and KitchenView are running in parallel for the system to function correctly.

4. Build Docker images and start the containers:
docker-compose up --build
Requirements:
Docker  
Node.js  
MySQL  

How to use the program
Navigate to the web interface where customers can view the menu and place orders.
The kitchen view shows updates of incoming orders.
BurgerOrderer: A user-friendly web interface to browse the menu and submit an order.
MenuStore:t MySQL database storing menu data, including item names, prices, ingredients.
KitchenView: A kitchen overview displaying orders and any customizations for each order.
