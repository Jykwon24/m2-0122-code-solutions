const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = process.argv[2];
const equation = process.argv[3];
const y = process.argv[4];

if (equation === 'plus') {
  console.log('result:', add.sum(Number(x), Number(y)));
} else if (equation === 'minus') {
  console.log('result:', subtract.difference(Number(x), Number(y)));
} else if (equation === 'times') {
  console.log('result:', multiply.product(Number(x), Number(y)));
} else if (equation === 'over') {
  console.log('result:', divide.quotient(Number(x), Number(y)));
}
