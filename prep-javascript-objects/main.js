const person = {
  firstName: 'Joe',
  lastName: 'Dei Rossi',
  hobby: 'Basketball'
};

console.log('person object before:', person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Best Buy Associate';
console.log("The person's current job is:", person.job);

person.previousJob = 'Merchandising';
console.log("The person's previous job is:", person.previousJob);

console.log('person object after:', person);
