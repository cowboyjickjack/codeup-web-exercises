const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

/** FUNCTIONS VS METHODS
 * METHODS: can be called on objects. '.' is a clue, that it'll run on an object
 * since prices is an array, it's technically an object. **/

/** forEach takes a function. "I'll loop, but what do I do?" **/
/** however, a function takes (up to) 3 parameters: element, index, array. **/
/** price is the parameter we're passing through the function **/
prices.forEach(price => console.log(price));