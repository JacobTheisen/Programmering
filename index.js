import fs from 'fs';

let studentList = document.getElementById('studentList');
//let studentList1 = document.getElementById('studentList1');
let addNewButton = document.getElementById('addNew');
let oppdaterButton = document.getElementById('oppdater');
let newStudentName = document.getElementById('name');
let newStudentMail = document.getElementById('mail');
let students = '';
let resultat = document.getElementById('resultat');

fs.readFile('src/data.json', (error, data) => {
  students = JSON.parse(data);

  for (let student of students) {
    let li = document.createElement('li');
    li.innerText = student.name + ', ' + student.email;
    studentList.append(li);
  }
});
// Oppdatere json-filen fra js-filen
addNewButton.onclick = () => {
  let newStudent = { name: newStudentName.value, email: newStudentMail.value };
  //for (let studentNy of newStudent) {
  let li = document.createElement('li');
  li.innerText = newStudent.name + ', ' + newStudent.email;
  studentList.append(li);
  //}
  students.push(newStudent);
  fs.writeFile('src/data.json', JSON.stringify(students), error => {
    if (error) {
      resultat.innerText = 'Could not write to file';
    } else {
      resultat.innerText = 'Successfully wrote to file';
    }
  });
  newStudentName.value = '';
  newStudentMail.value = '';
};
// oppdatere html-siden fra json.filen. Funker ikke foreløpig
oppdaterButton.onclick = () => {
  studentList.innerHTML = '';
  fs.readFile('src/data.json', (error, data) => {
    students = JSON.parse(data);
    if (error) {
      resultat.innerText = 'Could not update the file';
    } else {
      resultat.innerText = 'Successfully updated the file';
    }
    for (let student1 of students) {
      let li = document.createElement('li');
      li.innerText = student1.name + ', ' + student1.email;
      studentList.append(li);
    }
  });
};
