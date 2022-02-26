/**
 * @typedef {Object} FizzBuzzDataObject
 * @property {Number} number The corresponding number for this object.
 * @property {Number} indexInSourceArray The corresponding number´s index in its source array.
 * @property {Boolean} isFizz States if the corresponding number for this object is Fizz.
 * @property {Boolean} isBuzz States if the corresponding number for this object is Buzz.
 * @property {Boolean} isFizzBuzz States if the corresponding number for this object is FizzBuzz.
 * @property {String} text Some text, saying either 'Fizz', or 'Buzz', or 'FizzBuzz'.
 * @property {String} error Some error text, if errors occurred for the corresponding number.
 */

/**
 * This function runs the FizzBuzz-Test for a range of positive integer numbers, given as array. The function
 * returns a same-sized array of objects, where every object contains the FizzBuzz data for the corresponding number.
 * @param {Number[]} numbers An array, containing positive integer numbers to test.
 * @param {Number} [fizzNumber=3] Optional number, used as fizz-number. Default: 3.
 * @param {Number} [buzzNumber=5] Optional number, used as buzz-number. Default: 5.
 * @returns {FizzBuzzDataObject[]} An array, containing objects with FizzBuzz-Data as test-result.
 * @see For definition of FizzBuzz-Data object see {@link FizzBuzzDataObject}.
 */
export function fizzBuzz(numbers, fizzNumber = 3, buzzNumber = 5) {
    if (!numbers) {
        throw new Error(getNullOrUndefinedErrorMessage('numbers'));
    }
    if (!Array.isArray(numbers)) {
        throw new Error(`Given parameter (numbers) is not an array.`);
    }
    validateNumberParameter(fizzNumber, 'fizzNumber');
    validateNumberParameter(buzzNumber, 'buzzNumber');
    return createArray(numbers, fizzNumber, buzzNumber);
}

function getNullOrUndefinedErrorMessage(paramName) {
    return `Given parameter (${paramName}) is null or undefined.`;
}

function validateNumberParameter(paramValue, paramName) {
    if (!paramValue) {
        throw new Error(getNullOrUndefinedErrorMessage(paramName));
    }
    if (!isPositiveIntegerNumber(paramValue)) {
        throw new Error(`Given parameter (${paramName}) has to be a positive integer number.`);
    }
}

function isPositiveIntegerNumber(value) {
    return !Number.isNaN(value) && Number.isInteger(value) && value >= 0;
}

function createArray(numbers, fizzNumber, buzzNumber) {
    const iterable = numbers.map((value, index) => createObject(value, index, fizzNumber, buzzNumber));
    return Array.from(iterable);
}

function createObject(number, index, fizzNumber, buzzNumber) {
    const result = {
        number: 0,
        indexInSourceArray: index,
        isFizz: false,
        isBuzz: false,
        isFizzBuzz: false,
        text: 'Error',
        error: ''
    };
    if (!isPositiveIntegerNumber(number)) {
        result.error = `Value at index ${index} in source array was not a positive integer number.`;
        return result;
    }
    result.number = number;
    result.isFizz = isFizz(number, fizzNumber);
    result.isBuzz = isBuzz(number, buzzNumber);
    result.isFizzBuzz = result.isFizz && result.isBuzz;
    result.text = getText(result.isFizz, result.isBuzz);
    return result;
}

function isFizz(number, fizzNumber) {
    return number !== 0 && number % fizzNumber === 0;
}

function isBuzz(number, buzzNumber = 5) {
    return number !== 0 && number % buzzNumber === 0;
}

function getText(isFizz, isBuzz) {
    if (isFizz && isBuzz) return 'FizzBuzz';
    if (isFizz) return 'Fizz';
    if (isBuzz) return 'Buzz';
    return '';
}