
// 1. addTwoNumbers
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum:', sum);

// 2. convertHoursToMinutes
function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes:', minutes);

// 3. getGreeting
function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('World');
console.log('greeting:', greeting);

// 4. addAndMultiplyBy5
function addAndMultiplyBy5(num1, num2) {
  return 5 * (num1 + num2);
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5Result:', addAndMultiplyBy5Result);

// 5. multiplyAndDivideBy5
function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5Result:', multiplyAndDivideBy5Result);

// 6. subtractTwoNumbers
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('difference:', difference);

// 7. getCircleCircumference
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

// 8. getFullName
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('fullName:', fullName);

// 9. cube
function cube(number) {
  return number ** 3;
}

var cubeResult = cube(5);
console.log('cubeResult:', cubeResult);
