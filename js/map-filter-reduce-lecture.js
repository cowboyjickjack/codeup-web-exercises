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
// const mileages = cars.map(car => car.mileage);
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
// TODO: Use .map to create an array of strings where
//  each element is a user's email address.
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
// forEach separates them each
// emailAddress.forEach(email => console.log(email));
// console.log(emailAddress);

/** FILTER LESSON **/
// .sort shows how to sort objects based on numeric property
const underTenThousandMiles = cars.filter(car => car.mileage < 10000).sort((a, b) => a.mileage - b.mileage);

// TODO: Use .filter to create an array of user objects where
//  each user object has at least 3 languages in the languages array.
const overThreeLanguages = users.filter(user => user.languages.length >= 3);

// TODO: Create an array with smash characters who's names contain only 5 letters.
const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi",
    "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff",
    "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario",
    "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo",
    "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit",
    "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle",
    "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede",
    "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man",
    "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler",
    "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk",
    "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling",
    "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant",
    "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve",
    "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];
const smashersWithFiveLetters = smashers.filter(character => character.length === 5).sort();
// TODO: Create another array with all the smash characters whose names contain over 10 letters.
const smashersWithOverTenLetters = smashers.filter(character => character.length > 10).sort();

/** PRACTICE **/
// TODO: Take an array of numbers and make them strings
arr = [2, 5, 100]
const stringed = arr.map(arr => arr.toString());

const usedCars = [
    {
        year: 2006,
        make: "Toyota",
        model: "Prius",
        price: 8044
    },
    {
        year: 2017,
        make: "Honda",
        model: "Civic",
        price: 18123
    },
    {
        year: 2004,
        make: "Ford",
        model: "Mustang",
        price: 9052
    },
    {
        year: 2013,
        make: "Cadillac",
        model: "ATS",
        price: 10991
    },
    {
        year: 2009,
        make: "Subaru",
        model: "Impreza",
        price: 7335
    },
    {
        year: 2008,
        make: "Dodge",
        model: "Charger",
        price: 8847
    },
    {
        year: 2014,
        make: "Chrysler",
        model: "300",
        price: 13517
    },
    {
        year: 2011,
        make: "Buick",
        model: "Regal",
        price: 8253
    },
    {
        year: 2012,
        make: "Chevrolet",
        model: "Impala",
        price: 6736
    },
    {
        year: 2015,
        make: "BMW",
        model: "3 series",
        price: 13767
    },
    {
        year: 2020,
        make: "Hyundai",
        model: "Elantra",
        price: 17892
    },
    {
        year: 2008,
        make: "Mercedes-Benz",
        model: "C-Class",
        price: 8444
    },
    {
        year: 2016,
        make: "Audi",
        model: "A3",
        price: 15900
    }
];

/** REDUCE LESSON **/
const usedCarPrices = usedCars.map(car => car.price);
// console.log(usedCarPrices)

/** .reduce() takes 4 variables **/
// no index 0, because it's shoved into the variable called total,
// and index 1 is shoved into the variable called priced
let totalValueOfAllCars = usedCarPrices.reduce((total, price, index) => {
    // console.log(`The index is ${index}, the total is ${total}, and the current car value is ${price}.`)
    return total + price;
});

const averageCarValue = usedCarPrices.reduce((total, price, index, array) => {
    // getting the accumulator
    total = total + price;
    if (index === array.length -1){
        // getting the average, at the end, the last iteration
        return parseFloat((total/array.length).toFixed(2));
    }
    return total;
});

// TODO: Find the total and average of the array of a hundred numbers.
const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279,
    2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909,
    9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189, 8539,
    8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238,
    6892, 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473,
    7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280,
    3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];

const total = aHundredNums.reduce((accumulator, currentValue, index) => {
    // console.log(`At index ${index}, the accumulator is ${accumulator}, and the current value is ${currentValue}`)
    return (accumulator + currentValue) ;
});

const hundoAverage = aHundredNums.reduce((acc, curr, index, array) => {
    acc = acc + curr;
    if (index === array.length - 1) {
        return acc / array.length;
    } else {
        return acc;
    }
})

const totalOfOdds = aHundredNums.reduce((acc, curr, index) => {
   if (index % 2 === 1) {
       return acc + curr;
   } else {
       return acc;
   }
});

/** Get value of all used cars via only reduce **/
const valueOfUsedCars = usedCars.reduce((acc, car) => {
    return acc + car.price}, // first argument is a function
    0 // second argument is a starting point
    // saying ok, 0 plus the first cars price, then put it into the acc, then get the next cars price, add, stuff into
    // acc, and so on
);

/** MINI REDUCE PRACTICE **/
const carsList = [
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
// TODO: Use .reduce() with a second argument to find the total mileage of all the cars in the cars array.
let totalMileage = carsList.reduce((acc, car) => {return acc + car.mileage}, 0);

/** STARTING WITH EMPTY ARRAY **/
// what if you want the highest mileage? index/array comes into play
const highestMilegage = carsList.reduce((acc, car, index, array) => {
    if (index === array.length - 1) { // on last iteration of the loop
        acc.push(car.mileage); // push the last mileage into the array
        return acc.sort( (a, b) => b - a)[0]; // sort from high to low and return the first one (remove 0 if you want all)
    } else {
        acc.push(car.mileage);
        return acc;
    }
}, []);

const mileageReport = cars.reduce((acc, car, index, array) => {
    if (index === array.length - 1) {
        acc.push(car.mileage);
        let report = 'The mileages are: ';
        report += acc.join(', ');
        const mileagesSorted = acc.sort((a, b) => b-a);
        const highestMileage = mileagesSorted[0];
        const lowestMileage = mileagesSorted[mileagesSorted.length - 1];
        report += ".\n";
        report += 'The highest mileage is ' + highestMileage + '.\n';
        report += 'The lowest mileage is ' + lowestMileage;
        return report;
    } else {
        acc.push(car.mileage);
        return acc;
    }
}, []);

