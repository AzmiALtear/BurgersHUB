const db = require('../../../MenuStore/config/db');

exports.getMenuItems = (req, res) => {
  const tablesWithDescription = ['burgers', 'chicken_menu', 'desserts_menu', 'fish_menu', 'kids_menu', 'salads_menu', 'sides'];
  const tablesWithoutDescription = ['drinks']; 

  let allMenuHTML = '<h1>Full Menu</h1>';
  let processedTables = 0;

  const allTables = [...tablesWithDescription, ...tablesWithoutDescription];

  allTables.forEach(table => {
    let sql;
    if (tablesWithDescription.includes(table)) {
      sql = `SELECT name, price, description FROM ${table}`;
    } else {
      sql = `SELECT name, price FROM ${table}`;
    }

    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send(`Error fetching items from ${table}`);
      }

      
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

// Helper function 
function formatTableName(tableName) {
  return tableName.replace('_', ' ').replace(/\b\w/g, char => char.toUpperCase());
}




