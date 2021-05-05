import './example.test.js';

import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('will take in user number and it is equal to random', (expect) => {
    const expected = 0;
    const actual = compareNumbers(6, 6);

    expect.equal(actual, expected);
});


test('will take in user number and it is greater than random', (expect) => {
    const expected = 1;
    const actual = compareNumbers(7, 6);

    expect.equal(actual, expected);
});


test('will take in user number and it is less than random', (expect) => {
    const expected = -1;
    const actual = compareNumbers(5, 6);

    expect.equal(actual, expected);
});