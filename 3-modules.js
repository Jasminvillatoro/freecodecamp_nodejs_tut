// CommonJS, every file is a module (by default). NodeJS uses CommonJS under the hood
// Modules(file) - Encapsulated code (only share minimum)
const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
// console.log(data);
// When you import a module you invoke it
require('./7-mind-grenade');
// sayHi('Susan');
// sayHi(john);
// sayHi(peter);
