## Frogs race

### Desctiption
Let's imagine that one frog is going to race(jump) a distance.
Well, this distance represented by array of numbers (negative or positive)
Start position of frogracer is zero element of this array.
Each number of this array represent how long frogracer can jump (positive - to the right, negative - to the left)
Frogracer will finish the race, as soon as it crosses the right border of array.
```js
    f.e. [1, 2, 1, 5]; // 1 -> 2 -> 5 -> out steps = 3
```

Okay, now we have more than 1 frog to start frogs race.
And the distance for this frogs will be represented by the matrix, each row for appropriate frog.

Create a function that will return an index of row of winner (winner has min out steps).

### For example:
```js
    let distance = [
        [1, 2, 4, 1, -2], // 1 -> 2 -> 1 -> -2 -> 4 out steps = 5 (0 RACER)
        [5, 2, 4, 1, 10], // 5 out steps = 1 WINNER (1 RACER)
        [1, 1, 1, 1, 1],  // 1 -> 1 -> 1 -> 1 -> 1 out steps = 5 (2 RACER)
        [2, 3, -1, 2, 1]  // 2 -> -1 -> 3 -> 1 out steps = 4 (3 RACER)
    ];

    getBestRacer(distance); // 1
```

#### Write your code in `src/index.js`
#### Run test locally `npm test`
