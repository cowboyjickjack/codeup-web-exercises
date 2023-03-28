const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

/** FUNCTIONS VS METHODS
 * METHODS: can be called on objects. '.' is a clue, that it'll run on an object
 * since prices is an array, it's technically an object. **/

/** forEach takes a function. "I'll loop, but what do I do?" **/
/** however, a function takes (up to) 3 parameters: element, index, array. **/
/** price is the parameter we're passing through the function **/
// prices.forEach(price => console.log(price)); // loop over this array, call the variable price, and output said variable

    // looping over prices array
/** PUTS INTO A NEW ARRAY FOR YOU!
 * each value in the old array is mapped to a new array.
 * return is what's pushing each value into the new array **/
const pricesAfterTax = prices.map(price => {
    const tax = (price * 0.0825).toFixed(2); // calculated tax // toFixed is limiting decimals to two
    // tax became a string, so it needs to be parseFloated into a number
    // console.log(`Price: ${price} / Tax: ${tax}`);
    const total = (price + parseFloat(tax)).toFixed(2);
    return total;
});

/** Starting with an array of numbers, use .map to create an array with all the numbers squared. **/
const randomNumbers = [2, 12, 70, 91, 1, 1, 59, 44, 33, 98];
// no {} because it's a single line and no return is needed
const numbersSquared = randomNumbers.map(number => Math.pow(number, 2));