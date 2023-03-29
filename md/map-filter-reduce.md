# Map - Filter - Reduce

Map, Filter, and Reduce are useful array iteration methods. 

An array iteration method is a method that operates on every item inside an array.

Map, filter, and reduce do not alter the original array. They either create a new array based on the old one, or they generate a value from the old array.

## Reviewing .forEach()

We've already seen one array iteration method, .forEach()

.forEach iterates over an array, doing something to it. That something is defined by the function you pass into the method. At its simplest, it can be used to output the array values, but usually you want to do something in addition to that.

```
let output = "";
const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
```

the function passed to forEach can take 3 parameters
the item it's iterating over
the index of the item
the array itself

```
prices.forEach(item => console.log(item));
```

to output to the browser we need to concatenate the html
otherwise it will overwrite itself each time

`<div id="output"></div>`
```
 prices.forEach(item => {
        output += `<p>${item}</p>`;
        $("#output").html(output);
    });
```

or in vanilla

```
 document.querySelector("#forEachOutput").innerHTML = output;
```


usually we want to do some more things to it to make it more useful

```
prices.forEach((item, index) => {
        const tax = (item * 0.0825).toFixed(2);
        const total = (item + parseFloat(tax)).toFixed(2);
        output += `<p>Item number ${index + 1}. Price: $${item}. Tax: $${tax}. Total: $${total}.</p>`;
        $("#output").html(output);
    });
```

Mini exercise. Take an array of strings

```
const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff",     "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle", "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];
```

Use a forEach loop to loop through the array and output each string to the console.

```
classList.forEach(smasher => console.log(smashers));
```

Higher challenge, use JavaScript and/or jQuery to create a section on the page, then wrap each string in paragraph tags and output it to the page.

```
// create a section. It does not immediately appear on the page
let section = document.createElement("section");

// add the attribute to the section
section.setAttribute('id', 'classList');

// Now we can tack the section onto an existing element
// this actually puts it on the page
document.querySelector('body').appendChild(section);

// now we can loop over the classlist, adding paragraphs to the section we just created
classList.forEach(smasher=>document.querySelector("#classList").innerHTML +='<p>'+smasher+'</p>');
```

## .map()

.map is similar in that it takes a function, which itself takes up to 3 argum ents, the item itself, the item's index, and the array

```
const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

const pricesAfterTax = prices.map(item => {
    const tax = (item * 0.0825).toFixed(2);
    const total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
    return parseFloat(total);
});
pricesAfterTax.forEach(item => {
        output += `<p>${item}</p>`;
        $("#output").html(output);
    });
```

#### Try it out (mini-exercise):

Starting with an array of numbers, use .map to create an array with all the numbers squared.

```
const randomNumbers = [70, 30, 73, 22, 40, 48, 76, 20, 13, 92, 20, 56, 97, 76, 26, 77, 57, 47, 83, 70 ];
```
```
const numbersSquared = randomNumbers.map(number => number ** 2);
```

You could also do some filtering, restricting the modification to only those elements that meet some criterion.

Perhaps most useful is to extract relevant items from object arrays

```
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

const mileages = cars.map(car => car.mileage);

// Note the above is the arrow function version of
// the following:
const mileages = cars.map(function(car){
   return car.mileage;
});

mileages.forEach(item => {
    output += `<p>${item}</p>`;
    $("#output").html(output);
});

```

You can also reformat in the process. For example

```
let carNames = cars.map(car => `${car.make} ${car.model}`);
console.log(carNames);
```

#### mini-exercise

Take your books array from the objects exercise. Use .map() to create a new array that has book objects with all the author names in a single element.

```
const books = [
        {
            title: "Mexican Gothic",
            author: {
                firstName: "Sylvia",
                lastName: "Moreno"
            }
        },
        {
            title: "All Systems Red",
            author: {
                firstName: "Martha",
                lastName: "Wells"
            }
        },
        {
            title: "1177 B.C.: The Year Civilization Collapsed",
            author: {
                firstName: "Eric",
                lastName: "Cline"
            }
        },
        {
            title: "Version Control With Git",
            author: {
                firstName: "Jon",
                lastName: "Loeliger"
            }
        },
        {
            title: "Data Structures the Fun Way",
            author: {
                firstName: "Jeremy",
                lastName: "Kubica"
            }
        }
    ]

const newBooks = books.map(book => {
    return {
        title: book.title,
        author: `${book.author.firstName} ${book.author.lastName}`
    }
});
```

### Stop and do .map() exercise

## The filter method

Equally useful in this sense is the .filter() method

The filter method again creates a new array and does not alter the original array.  It also takes a function, and that function can take three arguments, the item, the item's index, and the array itself

```
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

const under10K = cars.filter(car => car.mileage < 10000);


under10K.forEach(({make, model, mileage}) => {
    output +=`<p>I found a ${make} ${model} with ${mileage} miles.</p>`;
    $("#output").html(output);
});

or

under10K.forEach(({make, model, mileage})=>{
    const p = document.createElement('p');
    p.innerHTML = `I found a ${make} ${model} with ${mileage} miles`;
    document.querySelector("body").prepend(p);
});

```
Note the above is the ES6-ified version of the code that follows. Note the object deconstruction inside the arrow function parameter. We are to understand this as, "a function that takes an object and 
loops through its properties, defining variables called make, model, and mileage" based on the values of the three first properties.
```

const under10K = cars.filter(function(car){
    return car.mileage < 10000;
});

 under10K.forEach(function(car){
        const {make, model, mileage} = car;
        output +=`<p>I found a ${make} ${model} with ${mileage} miles.</p>`;
        $("#output").html(output);
    });
```

If you want to order these in some way you can use the sort
but to sort on numbers is a little more complicated
```
const over10K = cars.filter(car => car.mileage > 10000).sort((a,b)=>a.mileage - b.mileage);
```
Remember, with sort if the result is negative, a is sorted after b, otherwise a is sorted before b.
so this means if a is greater than b, it should be after b.

#### mini-exercise

Create an array with all the smash characters whose names contain only 5 letters. Create another array with all the smash characters whose names contain over 10 letters. Order these arrays alphabetically.

```
const shortNameSmashers = smashers.filter(smasher => smasher.length === 5).sort();
const longNameSmashers = smashers.filter(smasher => smasher.length > 10).sort();
```

### Chaining filter and map

You can chain filter and map. Let's get a new array of cars.

```
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
```
Now, you can filter out the cars that are more expensive than $10000, then create a new array after calculating the tax and adding the price after tax property. Then we can output the results.
```
usedCars.filter(car => car.price < 10000)
    .map(car => {
            const tax = car.price * 0.0825;
            const total = (car.price + tax).toFixed(2);
            return {...car, priceWithTax: parseFloat(total)}
    }).sort((a,b) => b.price - a.price)
    .forEach(({year, make, model, price, priceWithTax}) => {
            const p = document.createElement('p');
            p.innerHTML = `There's a ${year} ${make} ${model} for $${price}, or $${priceWithTax} with tax`;
            document.querySelector('body').prepend(p);
        });
```

If we need to keep the resulting array, we can store it.

```
const cheaperUsedCars = usedCars.filter(car => car.price < 10000)
    .map(car => {
        const tax = car.price * 0.0825;
        const total = (car.price + tax).toFixed(2);
        return {...car, priceWithTax: parseFloat(total)}
    }).sort((a,b) => b.price - a.price);

console.log(cheaperUsedCars);
```

### Stop and do .filter() exercise

## The Reduce Method

The .reduce() method is different, because the purpose of the function you pass to it is to reduce the array to one value. The most common use scenario is to find a total. Let's say we create an array of only used car prices. 

```
const carValues = usedCars.map(car => car.price);
```
Now, here is how I get the total value 
```
let totalValueOfCars = carValues.reduce((total, price)=> total + price);
```
Then:
```
$("#output").append(`<p>The total is ${totalCost}</p>`);
```
I am using let for totalValueOfCars because I will reassign the value in a moment.

Unlike the previous array iterators, .reduce() can take up to four parameters -- the first is a parameter called "total" which is an accumulator. By default, it is set to the value of the first element in the array. The other three are similar to .forEach, .map, and .filter -- the usual item, item index, and the array itself.

Here, total is like declaring 
```
let total = carValues[0]
total = total + price
return total
```

We can examine the workings of this if we give ourselves some output during the iteration
```
totalValueOfCars = carValues.reduce((total, price, index)=>{
    console.log(`The index is ${index}, the total is ${total}, the current car value is ${price}`);
    return total + price;
});
```

We finally have a use scenario where the array is a useful argument

```
const averageCarValue = carValues.reduce((total, price, index, carsArray)=>{
    total = total + price;
    // console.log(total);
    if (index === carsArray.length -1) {
        return total/carsArray.length;
    } else {
        return total;
    }
});
console.log("The average value of the cars on the lot is: " + averageCarValue.toFixed(2));
```

Notice that we need a return on every iteration through the array elements. Otherwise, nothing gets passed on to the next iteration of the loop.

This is why, in the averaging scenario, and in fact in all uses of .reduce, we must return a value to the next iteration of the loop. 

So, basically, what we are doing in the averaging .reduce() is, on every iteration we are returning the total, as it is usually used; but at the very end it averages before returning.

### Reduce mini-exercise here

```
const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279, 2873, 1820, 1468, 9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909, 9431, 4313, 2265, 7709, 5131, 2054, 8212, 9285, 7945, 612, 6055, 7189, 8539, 8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749, 1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217, 9438, 4473, 7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280, 3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];
```
Find the total and average of the array of a hundred numbers.

```
const total = aHundredNums.reduce((total, num) => total + num);
console.log("The total is " + total);

const average = aHundredNums.reduce((total, num, index, array)=>{
    total = total + num;
    return index === array.length-1 ? total/array.length : total;
});
console.log("The average is : " + average);
```

### Reducing from a custom start point

A lot of applications of the .reduce method, though, work with the potential to assign the function a custom initial total. You do this by passing reduce a second argument. Let's consider how we might get the total value of the cars on the lot without going through the intermediate step of using .map to create an array of car prices. How would we do it directly?

If we try to use a simple total it won't work.

```
const valueOnLot = usedCars.reduce((total, car) => total + car.price);
console.log(valueOnLot);
[object Object]181239052109917335884713517825367361376717892844415900
```

What happens here? Remember, the first argument represents the first item in the array. In this case, it's an object. So we get a string representation of a generic object, to which we get concatenated all the car prices.

If we try to start with the first item's price, that won't work either. 

```
const valueOnLot = usedCars.reduce((total, car) => total.price + car.price);
console.log(valueOnLot);
NaN
```

What is happening here is, yes, the first item is a car object, and we can get its price and add the second car's price. But then we have a number. And that number does not have a price property, it's no longer an object. So on the next iteration, when we try to add a number's price property (which is undefined) to a number, undefined plus a number is NaN, so we get NaN.

Instead, what we have to do is give it a custom starting point, 0. That's what we want, we want it to start at 0, not with an object or anything else, we want it to start counting at 0.

```
const valueOnLot = usedCars.reduce(function(total, car){
    return total + car.price;
}, 0);

console.log(valueOnLot);
```

### Reduce mini-exercise here

Use .reduce() with a second argument to find the total mileage of all the cars in the cars array.

```
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

const carsTotalMileage = cars.reduce((total, car) => total + car.mileage, 0);
console.log(carsTotalMileage);
```

### Using an empty array as the custom start point

We can also start out with an empty array.

Let's say we have an array of objects. We are familiar with this data structure now from JSON and AJAX. Something like our cars array

```
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
```

Now it is fairly straightforward to make the accumulator variable in the reduce function an empty array. The item passed on each occasion is a car object. So, on each iteration through the cars array we push the mileage property into the accumulator, which is an empty array, and we return the array after it has the mileage pushed. By this means, at the end of the reduce iteration, we have an array of mileages

```
const mileages = cars.reduce((accumulator, car) => {
        accumulator.push(car.mileage);
        return accumulator;
    }, []);

console.log(mileages);
```
I can output this to the page using for ... of. Assuming there is an h1 at the top of the page, this will output to the top of whatever is directly after the
```
for (const mileage of mileages){
    document.querySelector('h1').insertAdjacentHTML("afterend", `<p>${mileage}</p>`);
}
```
Now, if we were to, say, want to extract one value, we could go back to the technique of using an if-else statement to carry out a different operation on the last iteration. To do this we need to pass all four parameters to the reduce function

so now let's pass the index and array parameters into the reduce function.

We do the exact same thing as in the previous example, pushing the mileage into the accumulator, which has been declared as an empty array. So, as the reduce function iterates through the cars array, it starts to push the mileages into this empty array we declared as the accumulator variable. On our final iteration through the cars array, which we signal by matching the index to the length of the cars array minus one, we start out doing the same thing: push the mileage into the accumulator array.

But then we run a sort function on the accumulator array, which puts them in descending order, and we return only the first item in the array, which must be the highest value since we just sorted it so the highest value would be first. And now we have the highest mileage.

```
   const highestMileage = cars.reduce((accumulator, car, index, carsArray) => {
        if (index === carsArray.length-1){
            accumulator.push(car.mileage);
            return accumulator.sort(function(a, b){return b-a})[0];
        } else {
            accumulator.push(car.mileage);
            return accumulator;
        }
    }, []);
```

We could also use the spread operator with Math.max. As we have learned, the spread operator turns an array into a list of comma separated arguments. So once we have that array of mileages, we can pass it to Math.max using the spread operator.:
```
const highestMileage = cars.reduce((accumulator, car, index, carsArray) => {
        if (index === carsArray.length-1){
            accumulator.push(car.mileage);
            return Math.max(...accumulator);
        } else {
            accumulator.push(car.mileage);
            return accumulator;
        }
    }, []);
```
A way of doing this without using the spread operator is the .apply() method, which works like this:
```
const highestMileage = cars.reduce((accumulator, car, index, carsArray) => {
        if (index === carsArray.length-1){
            accumulator.push(car.mileage);
            return Math.max.apply(Math, accumulator);
        } else {
            accumulator.push(car.mileage);
            return accumulator;
        }
    }, []);
```
I could also chain two reduce methods. The first one creates the array of mileages, and the second one reduces that array to only the largest value:

```
 const highestMileage = cars.reduce((accumulator, car) => {
        accumulator.push(car.mileage);
        return accumulator;
    }, []).reduce((accumulatorArray, mileage) => Math.max(accumulatorArray, mileage));
```

The good thing about the array accumulator is, we can actually return more than one value if we want to. It's very flexible. Here's another way of returning the minimum and maximum of an array, using reduce. There is a lot of flexibility as to what to do on the last iteration, once the accumulator array is full:

```
var prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];

var highLowPrices = prices.reduce(function(accumulatorArray, price, index, pricesArray){
    if (index === pricesArray.length-1){
        accumulatorArray.push(price);
        var returnArray = [];
        accumulatorArray.sort(function(price1, price2){
            return price1 - price2;
        });
        var lowestPrice = accumulatorArray[0];
        var highestPrice = accumulatorArray[accumulatorArray.length-1];
        returnArray.push(lowestPrice);
        returnArray.push(highestPrice);
        return returnArray;
    } else {
        accumulatorArray.push(price);
        return accumulatorArray;
    }
}, []);

console.log(highLowPrices);
```

### Using an empty object as the accumulator: tallying numbers of things in an array.

### Note: this part is not needed for the exercise; just extra knowledge, optional

Interesting things can happen when we declare an empty object as the beginning of the reduction. One use scenario is tallying the numbers of different things in an array. We can produce a tally like this.

```
   const grades = [90, 50, 100, 70, 80, 90, 60, 100, 80, 70, 100, 60, 90, 80, 70, 60, 90, 50, 60, 70];

   // here, totalObject is set to equal an empty object
   // the grade parameter represents each number in the array in sequence
   // each time through the array, the function in the .reduce() method 
   // sets a property with the key (or name) set to equal the number, and sets its value to 1
   // every time it re-encounters the grade it re-sets it to 1
   
   const howManyOfEachGrade = grades.reduce((object, grade) => {
        object[grade] = 1;
        return object;
    }, {});
   
   // Now we have an object with a property that has the key/name set to the grade, and a value of 1
   console.log(howManyOfEachGrade);
```

now I add a decision
if that key doesn't exist yet, create it and set its value to 1
if that key does exist, add 1 to the value

```
const howManyOfEachGrade = grades.reduce((totalsObject, grade) => {
        if (!totalsObject[grade]){
            totalsObject[grade] = 1;
        } else {
            totalsObject[grade]++;
        }
        return totalsObject;
    }, {});

    console.log(howManyOfEachGrade);
```

We can sort the results, thus:
```
    const gradesCountedAndSorted = Object.entries(howManyOfEachGrade).sort(function(a, b){return b[1]-a[1]});

    console.log(gradesCountedAndSorted);
```

Alternatively, we could do it with a reduce chained with a sort, by using an array as accumulator and creating an array of arrays, where each array within the array is a combination of a grade and a number.

```
const arrayOfGradeCounts = grades.reduce((array, grade)=>{
    // set a flag variable to determine if the array already includes the grade
    let arrayIncludesGrade = false;
    // loop through the accumulator array.
    // if you find an element that already has that grade, increase the associated number annd set the flag variable to true
    for (let i = 0; i < array.length; i++){
        if (array[i][0] === grade){
            arrayIncludesGrade = true;
            array[i][1]++;
        }
    }
    // if the loop completed and the accumulator array does not currently have the grade, create that element
    if (!arrayIncludesGrade)array.push([grade, 1]);
    return array;
}, []).sort((a,b)=>a[1]-b[1]);

console.log(arrayOfGradeCounts);
```

We can also do this with objects.

```
const moreCars = [
    { make: 'Ford', model: 'Mustang', mileage: 34567 },
    { make: 'Ford', model: 'F-150', mileage: 12345 },
    { make: 'Ford', model: 'Escape', mileage: 45678 },
    { make: 'Chevrolet', model: 'Camaro', mileage: 56789 },
    { make: 'Chevrolet', model: 'Silverado', mileage: 23456 },
    { make: 'Chevrolet', model: 'Equinox', mileage: 78901 },
    { make: 'Buick', model: 'Enclave', mileage: 23456 },
    { make: 'Buick', model: 'Regal', mileage: 56789 },
    { make: 'Jeep', model: 'Wrangler', mileage: 34567 },
    { make: 'Jeep', model: 'Grand Cherokee', mileage: 67890 },
    { make: 'Dodge', model: 'Charger', mileage: 12345 },
    { make: 'Dodge', model: 'Durango', mileage: 45678 },
    { make: 'Lincoln', model: 'MKZ', mileage: 78901 },
    { make: 'Lincoln', model: 'Navigator', mileage: 23456 },
    { make: 'GMC', model: 'Sierra', mileage: 56789 },
    { make: 'GMC', model: 'Terrain', mileage: 34567 },
    { make: 'Ford', model: 'Focus', mileage: 12345 },
    { make: 'Ford', model: 'Explorer', mileage: 45678 },
    { make: 'Chevrolet', model: 'Impala', mileage: 23456 },
    { make: 'Chevrolet', model: 'Suburban', mileage: 78901 },
    { make: 'Buick', model: 'LaCrosse', mileage: 34567 },
    { make: 'Jeep', model: 'Renegade', mileage: 12345 },
    { make: 'Jeep', model: 'Compass', mileage: 45678 },
    { make: 'Dodge', model: 'Challenger', mileage: 78901 },
    { make: 'Lincoln', model: 'Continental', mileage: 23456 },
    { make: 'Lincoln', model: 'Aviator', mileage: 56789 },
    { make: 'GMC', model: 'Yukon', mileage: 34567 },
    { make: 'GMC', model: 'Acadia', mileage: 12345 },
    { make: 'Ford', model: 'Ranger', mileage: 45678 },
    { make: 'Ford', model: 'Bronco', mileage: 78901 },
    { make: 'Chevrolet', model: 'Malibu', mileage: 23456 },
    { make: 'Chevrolet', model: 'Tahoe', mileage: 56789 },
    { make: 'Buick', model: 'Encore', mileage: 34567 },
    { make: 'Jeep', model: 'Cherokee', mileage: 12345 },
    { make: 'Dodge', model: 'Journey', mileage: 45678 },
    { make: 'Lincoln', model: 'Corsair', mileage: 78901 },
    { make: 'GMC', model: 'Canyon', mileage: 23456 },
    { make: 'Honda', model: 'Civic', mileage: 34567 },
    { make: 'Honda', model: 'Accord', mileage: 12345 },
    { make: 'Honda', model: 'CR-V', mileage: 45678 },
    { make: 'Toyota', model: 'Corolla', mileage: 56789 },
    { make: 'Toyota', model: 'Camry', mileage: 23456 },
    { make: 'Toyota', model: 'Rav4', mileage: 78901 },
    { make: 'Kia', model: 'Optima', mileage: 23456 },
    { make: 'Kia', model: 'Sportage', mileage: 56789 },
    { make: 'Kia', model: 'Soul', mileage: 34567 },
    { make: 'Hyundai', model: 'Elantra', mileage: 67890 },
    { make: 'Hyundai', model: 'Sonata', mileage: 12345 },
    { make: 'Hyundai', model: 'Tucson', mileage: 45678 },
    { make: 'Suzuki', model: 'Swift', mileage: 78901 },
    { make: 'Suzuki', model: 'Vitara', mileage: 23456 },
    { make: 'Mazda', model: 'CX-5', mileage: 56789 },
    { make: 'Mazda', model: 'Mazda3', mileage: 34567 },
    { make: 'Daihatsu', model: 'Charade', mileage: 12345 },
    { make: 'Daihatsu', model: 'Mira', mileage: 45678 },
    { make: 'Toyota', model: 'Yaris', mileage: 23456 },
    { make: 'Toyota', model: 'Highlander', mileage: 56789 },
    { make: 'Honda', model: 'Pilot', mileage: 78901 },
    { make: 'Honda', model: 'CR-Z', mileage: 23456 },
    { make: 'Suzuki', model: 'Jimny', mileage: 34567 },
    { make: 'Suzuki', model: 'Celerio', mileage: 12345 },
    { make: 'Mazda', model: 'CX-3', mileage: 45678 },
    { make: 'Mazda', model: 'Mazda6', mileage: 78901 },
    { make: 'Toyota', model: 'Tacoma', mileage: 23456 },
    { make: 'Toyota', model: 'Sienna', mileage: 56789 },
    { make: 'Kia', model: 'Stinger', mileage: 34567 },
    { make: 'Kia', model: 'Niro', mileage: 12345 },
    { make: 'Hyundai', model: 'Venue', mileage: 45678 },
    { make: 'Hyundai', model: 'Santa Fe', mileage: 78901 },
    { make: 'Daihatsu', model: 'Terios', mileage: 23456 },
    { make: 'Daihatsu', model: 'Materia', mileage: 56789 },
    { make: 'Suzuki', model: 'Alto', mileage: 34567 },
    { make: 'Suzuki', model: 'Escudo', mileage: 12345 },
    { make: 'Fiat', model: '500', mileage: 56789 },
    { make: 'Fiat', model: 'Panda', mileage: 98765 },
    { make: 'Fiat', model: 'Tipo', mileage: 12345 },
    { make: 'Mercedes-Benz', model: 'C-Class', mileage: 12345 },
    { make: 'Mercedes-Benz', model: 'E-Class', mileage: 78901 },
    { make: 'Mercedes-Benz', model: 'S-Class', mileage: 23456 },
    { make: 'BMW', model: '3 Series', mileage: 56789 },
    { make: 'BMW', model: '5 Series', mileage: 98765 },
    { make: 'BMW', model: 'X5', mileage: 23456 },
    { make: 'Volvo', model: 'XC40', mileage: 56789 },
    { make: 'Volvo', model: 'XC60', mileage: 98765 },
    { make: 'Volvo', model: 'XC90', mileage: 12345 },
    { make: 'Audi', model: 'A3', mileage: 78901 },
    { make: 'Audi', model: 'A4', mileage: 23456 },
    { make: 'Audi', model: 'Q5', mileage: 56789 },
    { make: 'Jaguar', model: 'F-PACE', mileage: 23456 },
    { make: 'Jaguar', model: 'XE', mileage: 98765 },
    { make: 'Jaguar', model: 'XF', mileage: 12345 },
    { make: 'Volkswagen', model: 'Golf', mileage: 56789 },
    { make: 'Volkswagen', model: 'Jetta', mileage: 78901 },
    { make: 'Volkswagen', model: 'Tiguan', mileage: 23456 },
    { make: 'Fiat', model: 'Doblo', mileage: 12345 },
    { make: 'Fiat', model: '500L', mileage: 56789 },
    { make: 'Fiat', model: 'Spider', mileage: 98765 },
    { make: 'Mercedes-Benz', model: 'GLE', mileage: 23456 },
    { make: 'Mercedes-Benz', model: 'GLC', mileage: 56789 },
    { make: 'Mercedes-Benz', model: 'GLA', mileage: 78901 },
    { make: 'BMW', model: 'M3', mileage: 23456 },
    { make: 'BMW', model: 'M5', mileage: 56789 },
    { make: 'BMW', model: 'X3', mileage: 98765 },
    { make: 'Volvo', model: 'S60', mileage: 12345 },
    { make: 'Volvo', model: 'S90', mileage: 23456 },
    { make: 'Volvo', model: 'V90', mileage: 56789 },
    { make: 'Audi', model: 'Q3', mileage: 78901 },
    { make: 'Audi', model: 'Q7', mileage: 23456 },
    { make: 'Audi', model: 'TT', mileage: 56789 }
    ];

const carsCounted = moreCars.reduce((object, car)=>{
   if (!object[car.make]){
       object[car.make] = 1;
   } else {
       object[car.make]++;
   }
   return object;
}, {});
console.log(carsCounted);
```

Or, using the array accumulator:

```
const arrayOfMakeCounts = moreCars.reduce((array, car)=>{
    let arrayIncludesMake = false;
    for (let i = 0; i < array.length; i++){
        console.log(array[i][0]);
        console.log(car.make);
        if (array[i][0] === car.make){
            array[i][1]++;
            arrayIncludesMake = true;
        }
    }
    if (!arrayIncludesMake) array.push([car.make, 1]);
    return array;
}, []).sort((a,b)=>b[1]-a[1]);

console.log(arrayOfMakeCounts);
```

### Other array iteration methods we didn't cover today:

Note the other array iteration methods we did not go through today: 

[Array Iteration Methods](https://www.w3schools.com/JS/js_array_iteration.asp)

.reduceRight()
reduces from right to left

.every() 
checks if all array values pass a test

.some()
checks if some array values pass a test

.indexOf()
searches the array for a value and returns its position
returns the first occurrence if there are more than one

.lastIndexOf()
returns the position of the last occurrence of a value

.find()
returns the value of the first array element that passes some test

.findIndex()
returns the index of the first array element to pass some test

## Justin's extra exercises

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Map, Filter, Reduce Mini-Exercises</title>
</head>
<body>

<script>
  "use strict";

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

  // TODO 2: using map, create a new array of dog ages from the dogs array
  console.log('Exercise 2:');

  // TODO 3: using map, create a new array of dog objects from the dogs array that only have dog names and age properties and values
  console.log('Exercise 3:');


  // FILTER

  // TODO 4: using filter, create a new array containing only dogs younger than 10 years old
  console.log('Exercise 4:');

  // TODO 5: using filter, create a new array containing only dogs named 'Lexie'
  console.log('Exercise 5:');

  // TODO 6: using filter, create a new array containing only dogs that are trained and younger than 10
  console.log('Exercise 6:');


  // REDUCE

  // TODO 7: using reduce, return a string containing all dog names together with no spaces ("BubblesLexieDoggy...")
  console.log('Exercise 7:');

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

</script>
</body>
</html>
```

