const fs = require('fs');

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const fileLines = fs.readFileSync(dataPath, 'utf-8').trim().split('\n');
  const dbFieldNames = fileLines.shift().split(',');
  const studentPropNames = dbFieldNames.slice(0, -1);

  const studentGroups = fileLines.reduce((groups, line) => {
    const newGroups = { ...groups };
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, -1);
    const field = studentRecord[studentRecord.length - 1];
    newGroups[field] = newGroups[field] || [];
    newGroups[field].push(Object.fromEntries(studentPropNames.map((propName, idx) => [
      propName, studentPropValues[idx]])));
    return newGroups;
  }, {});

  const totalStudents = Object.values(studentGroups).reduce((pre, cur) => pre + cur.length, 0);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
