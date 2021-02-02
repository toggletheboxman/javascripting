/* There are three letiables which each have two possible artguments:
flavor can be either vanilla or chocolate; vessel can be either bowl or cone; toppings can be either peanuts or sprinkles*/

let flavor = 'vanilla';
let vessel = 'bowl';
let toppings = 'peanuts';

if (flavor === 'vanilla') {
  if (vessel === 'cone' && toppings === 'peanuts') {
  console.log('I\'d like two scoops of ' + flavor + ' ice cream in a ' + vessel + ' with ' + toppings + '.');
  } else if (flavor === 'vanilla' && vessel === 'bowl' && toppings === 'peanuts') {
  console.log('I\'d like two scoops of ' + flavor + ' ice cream in a ' + vessel + ' with ' + toppings + '.');
  } else if (flavor === 'vanilla' && vessel === 'cone' && toppings === 'sprinkles') {
    console.log('I\'d like two scoops of ' + flavor + ' ice cream in a ' + vessel + ' with ' + toppings + '.');
  } else if (flavor === 'vanilla' && vessel === 'bowl' && toppings === 'sprinkles') {
  console.log('I\'d like two scoops of ' + flavor + ' ice cream in a ' + vessel + ' with ' + toppings + '.');

if ((flavor === 'vanilla' && flavor === 'chocolate') && (vessel === 'cone' && vessel === 'bowl') && (toppings === 'sprinkles' && toppings === 'peanuts')) {
  console.log('I\'d like two scoops of ' + flavor + ' ice cream in a ' + vessel + ' with ' + toppings + '.');
}




// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
let shirtWidth = 23;
let shirtLength = 30;
let shirtSleeve = 8.71;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

// WRITE YOUR CODE HERE

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
  console.log('S');
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
  console.log('M');
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
  console.log('L');
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
  console.log('XL');
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
  console.log('2XL');
} else if ((shirtWidth >= 28 && shirtWidth < 30) && (shirtLength >= 34 && shirtLength < 35) && (shirtSleeve >= 10.13 && shirtSleeve < 10.63)) {
  console.log('3XL');
} else {
    console.log('NA');
}

let month = 2;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
  case 2:
    days = 28
}
console.log("There are " + days + " days in month " + month + " of the year.");

// change the value of `education` to test your code
let education = 'a Bachelor\'s degree';

// set the value of this based on a person's education
let salary = 0;

// your code goes here

switch (education) {
  case 'no high school diploma':
    salary += 25636;
    break;
  case 'a high school diploma':
    salary += 35256;
    break;
  case 'an Associate\'s degree':
    salary += 41496;
    break;
  case 'a Bachelor\'s degree':
    salary += 59124;
    break;
  case 'a Master\'s degree':
    salary += 69732;
    break;
  case 'a Professional degree':
    salary += 89960;
    break;
  case 'a Doctoral degree':
    salary += 84396;
}
console.log('In 2015, a person with ' + education + ' earned an average of $' + salary.toLocaleString('en-US') + '/year.');