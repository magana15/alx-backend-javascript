export default function updateStudentGradeByCity(array, city, newGrades) {
  return array
  .filter((a) => a.location === city)
  .map((a) => {
    for (const g of newGrades) {if (g.studentId === a.id) {a.grade = g.grade;}
  else {a.grade = 'N/A';

  }
}
return a;
  })

}

