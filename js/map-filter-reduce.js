"use strict"

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

// TODO: Use .filter to create an array of user objects where
//  each user object has at least 3 languages in the languages array.
const overThreeLanguages = users.filter(user => user.languages.length >= 3);

// TODO: Use .map to create an array of strings where each element is a user's email address.
const emailAddress = users.map(user => user.email);

// TODO:Use .reduce to get the total years of experience from the list of users.
//  Once you get the total of years you can use the result to calculate the average.
const totalYearsOfExperience = users.reduce((acc, curr, index, array) => {
    let totalYears =  acc + curr.yearsOfExperience; // avg
    // if (index === array.length - 1) { // last iteration
    //     return acc / array.length;
    // } else {
    //     return acc;
    // }
    return totalYears;
}, 0);
let avgYears = totalYearsOfExperience / users.length;



// TODO: Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((longest, curr) => {
    if (longest.email.length > curr.email.length){
       return longest;
    } else {
        return curr;
    }
});

// TODO: Use .reduce to get the list of user's names in a single string.
//  Example: Your instructors are: ryan, luis, zach, fernando, justin.
const userNames = users.reduce((acc, curr, index) => {
    // return index === 0 ? curr.name : acc + ', ' + curr.name; // ternary version
    if (index === 0) {
        return curr.name;
    } else {
        return acc + ', ' + curr.name;
    }
}, 0); // starting at the beginning

/** ADDITIONAL EXERCISES **/
// TODO: Given the following array, complete the todos...

const dogs = [
    {
        dogName: 'Bubbles',
        age: 10,
        isTrained: false
    },
    {
        dogName: 'Lexie',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Doggy',
        age: 5,
        isTrained: false
    },
    {
        dogName: 'Flopper',
        age: 3,
        isTrained: true
    },
    {
        dogName: 'Lexie',
        age: 1,
        isTrained: true
    },
    {
        dogName: 'Skip',
        age: 7,
        isTrained: true
    },
    {
        dogName: 'Blue',
        age: 4,
        isTrained: false
    }
];

// MAP

// TODO 1: using map, create a new array of dog names from the dogs array
console.log('Exercise 1:');
const dogNames = dogs.map(dog => dog.dogName);
console.log(dogNames)
// TODO 2: using map, create a new array of dog ages from the dogs array
console.log('Exercise 2:');
const dogAges = dogs.map(dog => dog.age);
console.log(dogAges)
// TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values
console.log('Exercise 3:');
const dogNamesAndAge = dogs.map(dog => {
   return {
       dogNames,
       dogAges
   };
});
console.log(dogNamesAndAge);
// FILTER

// TODO 4: using filter, create a new array containing only dogs younger than 10 years old
console.log('Exercise 4:');
const youngerThanTen = dogs.filter(age => {
    if (age.age < 10) {
        return age;
    }
});
console.log(youngerThanTen);
// TODO 5: using filter, create a new array containing only dogs named 'Lexie'
console.log('Exercise 5:');
const onlyLexie = dogs.filter(lexie => {
    if (lexie.dogName === 'Lexie') {
        return lexie;
    }
});
console.log(onlyLexie);
// TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
console.log('Exercise 6:');
const trainedAndUnderTen = dogs.filter(dog => {
    if ((dog.isTrained === true) && (dog.age < 10)) {
        return dog;
    }
});
console.log(trainedAndUnderTen);

// REDUCE

// TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
console.log('Exercise 7:');
const allNamesTogether = dogs.reduce((acc, curr) => {

})
// TODO 8: using reduce, return the total of adding all dog ages together (18)
console.log('Exercise 8:');

// TODO 9: using reduce, return an array of dog objects with all isTrained properties set to true
console.log('Exercise 9:');


// EXTRA CHALLENGES

// TODO 10: what is the average age of each dog?
console.log('Exercise 10:');

// TODO 11: what is the average age of dogs that are trained?
console.log('Exercise 11:');

// TODO 12: what is the average length of names of untrained dogs?
console.log('Exercise 12:');

// TODO 13: what are the combined ages of all dogs in dog years? (7x more than a human year)
console.log('Exercise 13:');

// TODO 14: create a string of the first letters of each dog name for dogs three years old (should be "LF")
console.log('Exercise 14:');