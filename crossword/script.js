// Assuming you have the crossword grid data in a variable called 'gridData' (list of lists)
const gridData = [
  [' ', 'C', 'A', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', 'A', 'T', ' ', 'D', 'O', 'G', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'F', 'I'],
  [' ', ' ', ' ', ' ', ' ', ' ', 'S', 'H', ' ']
]
const table = document.getElementById('crossword-grid');

// Function to create a table cell with content
function createTableCell(content) {
  const cell = document.createElement('td');
  cell.textContent = content;
  return cell;
}

// Function to populate a table row with cell data
function populateTableRow(rowData) {
  const row = document.createElement('tr');
  rowData.forEach(cellData => row.appendChild(createCell(cellData)));
  return row;
}

// Function to build the entire crossword table
function buildCrosswordTable() {
  gridData.forEach(row => table.appendChild(populateTableRow(row)));
}

buildCrosswordTable();
