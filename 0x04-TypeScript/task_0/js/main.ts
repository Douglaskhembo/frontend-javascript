// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 22,
  location: 'Nairobi'
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Brown',
  age: 25,
  location: 'Kisumu'
};

// Store them in an array
const studentsList: Student[] = [student1, student2];

// Create a table using Vanilla JS
const table = document.createElement('table');
const headerRow = document.createElement('tr');

// Header columns
const headers = ['First Name', 'Location'];
headers.forEach((headerText) => {
  const th = document.createElement('th');
  th.textContent = headerText;
  headerRow.appendChild(th);
});

table.appendChild(headerRow);

// Populate rows
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
