const assert = require('assert');
const getBestRacer = require('./src/index.js');

const distance = [
    [1, 2, 4, 1, -2],
    [5, 2, 4, 1, 10],
    [1, 1, 1, 1, 1],
    [2, 3, -1, 2, 1]
];

it('should return winner track\'s number correctly', () => {
    assert.equal(getBestRacer(distance), 1);
});
