/**
 * Runs the FizzBuzz-Test for all integer numbers between 0-100 and returns the result in a single string.
 * @param {Number} [maxNumbers=100] Optional number, used as test-limit. Default: 100.
 * @param {Number} [fizzNumber=3] Optional number, used as fizz-number. Default: 3.
 * @param {Number} [buzzNumber=5] Optional number, used as buzz-number. Default: 5.
 * @returns {String} A string, containing the test-result.
 */
export function fizzBuzz(maxNumbers = 100, fizzNumber = 3, buzzNumber = 5) {
    const isPosInt = value => value && !Number.isNaN(value) && Number.isInteger(value) && value > 0;
    const getErrMsg = param => `Given parameter (${param}) has to be a positive integer number.`;
    if (!isPosInt(maxNumbers)) throw new Error(getErrMsg('maxNumbers'));
    if (!isPosInt(fizzNumber)) throw new Error(getErrMsg('fizzNumber'));
    if (!isPosInt(buzzNumber)) throw new Error(getErrMsg('buzzNumber'));
    const isFizz = num => num !== 0 && num % fizzNumber === 0;
    const isBuzz = num => num !== 0 && num % buzzNumber === 0;
    let s = '';
    for (let i = 0; i <= maxNumbers; i++) {
        const fizz = isFizz(i);
        const buzz = isBuzz(i);
        if (fizz && buzz) s += 'FizzBuzz ';
        else if (fizz) s += 'Fizz ';
        else if (buzz) s += 'Buzz ';
        else s += `${i.toString()} `;
    }
    return s.trim();
}