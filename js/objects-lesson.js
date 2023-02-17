"use strict";

/** OBJECTS LESSON */

/** OBJECT LITERAL - basic and fundamental way of object creation */
const currentWeather = { // this is a key value
    temperature: 54.4, // these are all key value pairs (basically related variables)
    humidity: 28,
    clouds: 0,
    windDirection: `NNE`
}

/** To refer to them/use object properties: currentWeather.temperature || currentWeather.clouds || etc
 * cannot use `.` notation is key value has a dash */

// also as follows: currentWeather[`clouds`]

// console.log(currentWeather.temperature);

const DisplayWeatherProperty = (prop) => {
    // console.log(currentWeather[prop]); // if no return, will say undefined in console
}
/** examples of how you can call object properties... */

// console.log(currentWeather.clouds);
let weatherProperty = `clouds`;
// console.log(currentWeather[`clouds`]);
// console.log(currentWeather[weatherProperty]);

/** can do things just like any other variable */

// console.log(`The current temperature is ${currentWeather.temperature}`);

/** can also make decisions */

if (currentWeather.temperature < 80) {
    // console.log(`It's so cold!!!`);
} else {
    // console.log(`Ahhhh, nice and warm!`);
}


/** I can use a for in loop to loop though
* an object's properties, getting their keys
 // * second console log will also show the values
 // * third console shows them all, nice and pretty */

for (let prop in currentWeather) {
    // // console.log(prop);
    // // console.log(currentWeather[prop]);
    // console.log(prop + `: ` + currentWeather[prop]); // prefer this one, bc it shows it all on one line
}

/** can also change the values */

currentWeather.temperature = 63.7
// console.log(currentWeather.temperature);

/** can also add values that don't exist in the original object */
currentWeather.rain = `Is it raining? => ` + false;
// console.log(currentWeather.rain)
/** and delete them */
// delete currentWeather.humidity;
// // console.log(currentWeather)

/** ARRAY OF OBJECTS!!! VERY FREQUENT */

const hourlyWeather = [ // [] = array, so it's an array of objects!!!
    {
        time: "08:00",
        temperature: 78.91,
        feels_like: 78.91
    },
    {
        time: "09:00",
        temperature: 79.57,
        feels_like: 79.57
    },
    {
        time: "10:00",
        temperature: 81.46,
        feels_like: 86.04
    },
    {
        time: "11:00",
        temperature: 84.49,
        feels_like: 89.24
    }
];
/** this for each loop loops through all the .temperatures in the object array above.
 * forEach is a higher level function, and takes its argument as another function.
 * Below is the verbose version. */
// hourlyWeather.forEach(hourlyForecast => {
//     console.log(`At ${hourlyForecast.time}, the temperature will be ${hourlyForecast.temperature}.`);
// });

/** Object destructuring of the forEach above.
 * Simple/small objects are fine, but when you have multiple objects, and keys, it gets messy.
 * but you don't have control over the iterator. */
hourlyWeather.forEach(({time, temperature, feels_like}) => {
    console.log(`At ${time}, the temperature will be ${temperature}`);
});

/** I can use a for loop to access each one*/
for (let i = 0; i < hourlyWeather.length; i++) {
    console.log(hourlyWeather[i].temperature);
}

/** Spread operator - what values you don't want, will be stored in '...rest' */
hourlyWeather.forEach(function({time, ...rest}) {
    console.log(rest);
});

/** for ... of loop (can loop through an array, but is the simplest) but you lose the index */

for (const forecast of hourlyWeather) {
    console.log(forecast.temperature);
    console.log(forecast.time);
}

/** for ... of can also loop over a string :) */
const myString = `supercalifragalisticexpialidocious`;

for (const letter of myString) {
    console.log(letter);
}