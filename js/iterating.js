"use strict";

(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = [`Bob`, `Bill`, `Beau`, `Brian`];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    // console.log(`Number of elements in names => `, names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);
    // console.log(names[4]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    // for (let i = 0; i < names.length; i++) { // i++ iterates one at a time
    //     console.log(names[i]); // i = 0
    // }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // names.forEach(function (name, i, array) {
    // console.log(`The element follows: `, name);
    // console.log(`The index follows: `, i); // don't need
    // console.log(`The array follows: `, array); // don't need
    // });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    const returnFirst = array => {
        return (array[0]);
    }

    const returnSecond = array => {
        return (array[1]);
    }

    const returnLast = array => {
        const arrayLength = array.length; // length counts as a human
        return (array[arrayLength - 1]); // this accounts for the computer counting at 0
    }

    console.log(returnFirst(names));
    console.log(returnSecond(names));
    console.log(returnLast(names));

})();

