const patientList = [
  'Paul',
  'Jan',
  'Tri',
  'Maryam'
]

alert(patientList);

const command = prompt('Choose one: update, delete, add, reorder');
if(command == 'add'){
  const name = prompt('Enter Name');
  patientList.push(name);

alert (patientList);
}
if(command == 'delete'){
  const name = prompt('Enter Name');
  const index = patientList.indexOf(name);
  patientList.splice(index,1);

alert (patientList);
}


if(command == 'update'){
  var p = prompt('Enter Name to Update');
  var x = patientList.indexOf(p);
  patientList.splice(x,1);
  var p2 = prompt('Enter New Name');
  patientList.push(p2);

alert (patientList);
}


if(command == 'reorder'){
  var p1 = prompt('Enter Name to Reorder');
  patientList.indexOf(name);
  var p2 = prompt('Enter Second Name to Reorder');
  patientList.indexOf(name);
  patientList.reverse(p1,p2);

alert (patientList)
}
