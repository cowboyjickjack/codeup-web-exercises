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
    acc =  acc + curr.yearsOfExperience; // avg
    if (index === array.length - 1) { // last iteration
        return acc / array.length;
    } else {
        return acc;
    }
}, 0);

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
    // return index === 0 ? curr.name : acc + ', ' + curr.name;
    if (index === 0) {
        return curr.name;
    } else {
        return acc + ', ' + curr.name;
    }
}, '');