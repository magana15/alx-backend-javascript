export default function createIteratorObject(report) {
  // Generator function to iterate over employees
  function* employeeGenerator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return employeeGenerator();
}
