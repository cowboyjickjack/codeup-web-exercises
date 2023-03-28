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
const numbersSquared = randomNumbers.map(number => number ** 2);

// cars array with objects inside
const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

// pushing mileages into a new array
const mileages = cars.map(car => car.mileage);
// can take two and put them into a format that you want
// you can also destructure on the fly
const carNames = cars.map(car => `${car.make} ${car.model}`);

/** Take your books array from the objects exercise.
 * Use .map() to create a new array that has all the author names in a single property. **/
const books = [
    {
        title: 'The Great Gatsby',
        author: {
            firstName: 'F. Scott',
            lastName: 'Fitzgerald'
        },
        published: 1925,
        genre: 'Fiction'
    },
    {
        title: 'To Kill a Mockingbird',
        author: {
            firstName: 'Harper',
            lastName: 'Lee'
        },
        published: 1960,
        genre: 'Fiction'
    },
    {
        title: 'The Catcher in the Rye',
        author: {
            firstName: 'J.D.',
            lastName: 'Salinger'
        },
        published: 1951,
        genre: 'Fiction'
    },
    {
        title: 'The Lord of the Rings',
        author: {
            firstName: 'J.R.R.',
            lastName: 'Tolkien'
        },
        published: 1954,
        genre: 'Fantasy'
    },
    {
        title: 'Pride and Prejudice',
        author: {
            firstName: 'Jane',
            lastName: 'Austen'
        },
        published: 1813,
        genre: 'Fiction'
    },
    {
        title: '1984',
        author: {
            firstName: 'George',
            lastName: 'Orwell'
        },
        published: 1949,
        genre: 'Science Fiction'
    },
    {
        title: 'The Hobbit',
        author: {
            firstName: 'J.R.R.',
            lastName: 'Tolkien'
        },
        published: 1937,
        genre: 'Fantasy'
    },
    {
        title: 'One Hundred Years of Solitude',
        author: {
            firstName: 'Gabriel',
            lastName: 'García Márquez'
        },
        published: 1967,
        genre: 'Magical Realism'
    },
    {
        title: 'The Picture of Dorian Gray',
        author: {
            firstName: 'Oscar',
            lastName: 'Wilde'
        },
        published: 1890,
        genre: 'Fiction'
    },
    {
        title: 'The Hitchhiker\'s Guide to the Galaxy',
        author: {
            firstName: 'Douglas',
            lastName: 'Adams'
        },
        published: 1979,
        genre: 'Science Fiction'
    }
];

const authorNames = books.map(author => `${author.author.firstName} ${author.author.lastName}`);
// if you don't like nesting, you can take out multiple chunks from the array of objects
const titleAndAuthor = books.map(book => {
    return {
        title: book.title,
        author: `${book.author.firstName} ${book.author.lastName}`
    }
});

/** EXERCISES **/
// TODO: Use .map to create an array of strings where each element is a user's email address.
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
const emailAddress = users.map(email => `${email.email}`);
console.log(emailAddress);