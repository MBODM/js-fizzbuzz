import * as simple from './fizzbuzz-simple.js';
import * as complex from './fizzBuzz-complex.js';

print();
simpleVersion();
print('----------');
complexVersion();
print();

function print(text = '') {
    console.log(text);
}

function simpleVersion() {
    print('Run simple version:');
    const s = simple.fizzBuzz();
    print(s);
}

function complexVersion() {
    print('Run complex version:');
    const numbers = [...Array(101).keys()];
    const objects = complex.fizzBuzz(numbers, 4, 6);
    if (!objects) {
        print('Error: Result is null or undefined.');
        return;
    }
    if (objects.length !== numbers.length) {
        print('Error: Result has invalid length.');
        return;
    }
    const strings = objects.map(obj => `${obj.number}[${obj.text}]`);
    const s = strings.join(' ');
    print(s.trim());
}