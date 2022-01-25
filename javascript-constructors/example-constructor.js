function ExampleConstructor() {

}

console.log('value of prototype:', ExampleConstructor.prototype);
console.log('value of prototype:', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();
console.log(newExampleConstructor);

var instanceOf = newExampleConstructor instanceof ExampleConstructor;
console.log(instanceOf);
