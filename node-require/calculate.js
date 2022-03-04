const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = process.argv[2];
const equation = process.argv[3];
const y = process.argv[4];

if (equation === 'plus') {
  console.log('result:', add.sum(parseInt(x), parseInt(y)));
} else if (equation === 'minus') {
  console.log('result:', subtract.difference(parseInt(x), parseInt(y)));
} else if (equation === 'times') {
  console.log('result:', multiply.product(parseInt(x), parseInt(y)));
} else if (equation === 'over') {
  console.log('result:', divide.quotient(parseInt(x), parseInt(y)));
}
