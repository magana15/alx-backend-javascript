export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

//create two students

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Alex',
  lastName: 'Sanchez',
  age: 29,
  location: 'Cairo',
};

const studentsList: Array<Student> = [
  student1,
  student2,
];


// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table

export const renderTable = (studentsList: Array<Student>): void =>  {
  // create a table tag
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.insertAdjacentElement('beforeend', headRow);

  // insert the headers
  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }

  document.body.insertAdjacentElement('beforeend', table);
}

renderTable(studentsList);
