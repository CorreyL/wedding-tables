/**
 * This script parses a CSV with the following format
 * FirstName,LastName,TableId
 *
 * And creates a data-structure that maps TableID to an array of
 * First Name + First Character of Last Name
 */
(async () => {
  const fs = require('fs/promises')
  const textContent = await fs.readFile('guest-list.csv', 'utf8');
  const rows = textContent
    .split('\n');
  // Pop the header row of the CSV
  rows.shift();

  const jsonObj = {};

  for (const row of rows) {
    const columns = row.split(',');
    const firstName = columns[0];
    const lastName = columns[1];
    const tableNumber = parseInt(columns[2], 10);
    if (!jsonObj[tableNumber]) {
      jsonObj[tableNumber] = [];
    }
    // This implementation assumes there is no duplicate
    // First Name + First Character of Last Name duplicates
    jsonObj[tableNumber].push(`${firstName} ${lastName[0]}.`);
  }
  await fs.writeFile('guest-list.json', JSON.stringify(jsonObj));
})();
