const db = require('../../../MenuStore/config/db');

exports.getMenuItems = (req, res) => {
  // Separate tables with and without description columns
  const tablesWithDescription = ['burgers', 'chicken_menu', 'desserts_menu', 'fish_menu', 'kids_menu', 'salads_menu', 'sides'];
  const tablesWithoutDescription = ['drinks'];  // Tables like drinks that don't have description

  let allMenuHTML = '<h1>Full Menu</h1>';
  let processedTables = 0;

  const allTables = [...tablesWithDescription, ...tablesWithoutDescription];

  allTables.forEach(table => {
    // Choose the query based on whether the table has a description or not
    let sql;
    if (tablesWithDescription.includes(table)) {
      sql = `SELECT name, price, description FROM ${table}`;
    } else {
      sql = `SELECT name, price FROM ${table}`;  // No description for these tables
    }

    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send(`Error fetching items from ${table}`);
      }

      // Add the table heading to the HTML
      allMenuHTML += `<h2>${formatTableName(table)}</h2><ul>`;

      result.forEach(item => {
        allMenuHTML += `<li>${item.name} - ${item.price} SEK`;
        if (item.description) {
          allMenuHTML += `<br><small>${item.description}</small>`;
        }
        allMenuHTML += `</li>`;
      });

      allMenuHTML += '</ul>';

      processedTables += 1;

      if (processedTables === allTables.length) {
        allMenuHTML += '<br><a href="/">Back to Home</a>';
        res.send(allMenuHTML);
      }
    });
  });
};

// Helper function to make table names look nicer
function formatTableName(tableName) {
  return tableName.replace('_', ' ').replace(/\b\w/g, char => char.toUpperCase());
}




