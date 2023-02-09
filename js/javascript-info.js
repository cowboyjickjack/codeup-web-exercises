// (command + / ) will automatically make the current/highlighted lines comments

/* primitive type operators */
let var1 = true;
let var2 = 123456.789;
let var3 = "Hello Codeup";
let var4 = "1234";
let var5 = "2" + "2"; // one time in life where 2 + 2 would give you 22

// string: whatever is between "" or '' or ``

let var6 = 'I like Yamba\'s sweater'; // "\" escaping characters

let var7; // undefined

/* operator identifier */
//console.log( typeof "Jason" ); // identifies the type of operator
/* even vs odd number */
//console.log( 4859403 % 2 ); // if % 2 outputs 0, it's an even number. If it outputs 1, it's an odd number.

/* AND OR statements */
//console.log( true && true && false ); // wants all true. if not, then all false
//console.log( false || false || true ); // looking for the first true value

let var8 = "Gabriella";
let var9 = "Logged in user";
//console.log( "Hello " + (var10 || var11));

//console.log( !true || false || !true); // not true or false or not true, so false!

// let userIsLoggedIn = false; // an example of when you would use the ! operator
// if(!userIsLoggedIn) {
//     //do nothing
// }

/* strict and loose comparisons */
let userName = "Jason";
let nameIdontLike = "Jason";
//console.log(userName === nameIdontLike);
// if (userName === nameIdontLike) {
//     console.log(`GO AWAY!`)
// }

let userID = 123456;
let postAuthorID = 654321;
// if (userID != postAuthorID) {
//     console.log(`GO AWAY!`)
// }

/* let vs const */
let myShoes = "Boots"; // can be reassigned or changed after - no var!!
const myName = "Gabriella"; // can't be reassigned, and take up less processing power than 'let'

//console.log(`The myShoes variable is equal to ` + myShoes);

myShoes = "Chanclas";

//console.log(`The myShoes variable is equal to ` + myShoes);

/* SHORTHAND OPERATORS */
myBankAccount = 2;
//myBankAccount = myBankAccount + 1 // longhand version of the shorthand below
myBankAccount += 1;
// $3 at this point, but then I went to lunch
myBankAccount -= 1;
// back to $2 , and now to check to see if it's an even number
myBankAccount %= 2;

/* increments */
let counter = 1;

//console.log(++counter);

/* toFixed converts numbers into strings and moves the decimal */
//let price = "$" + 21.50.toFixed(2); // longhand // price = price.toFixed(2);
//console.log(price);

/* convert numbers into strings */
let students = 24;
students = students.toString();
//console.log(students);

/* convert string into number BUT parseInt depends on beginning with a number. If it doesn't, NaN */
let studentCount = "24";
studentCount = parseInt(studentCount);
//console.log(studentCount);

/* string manipulation */
let user = "Jason";
let dontLike = "jason";
let message = "i don't like you, go away!";
// if (user.toLowerCase() === dontLike.toLowerCase()) {
//     console.log(message.toUpperCase())
// } else {
//     console.log("Not Jason, you're cool")
// };

/* string manipulation to remove a 'censored' clan tag */
let discordName = "[YoLo] Jason";
discordName = discordName.split(']');
discordName = discordName[1].trim(); // gets rid of the space in between [ and J
//console.log(`This is the censored Discord name: ` + discordName);
//console.log(discordName.length); // with .length, it counts characters, so it begins at 1
// discordName = discordName.replace('[yolo]', '');

/* indexOf = returns index of specified character in string */
let sPosition = discordName.indexOf('s');
//console.log(sPosition);

/* replace part of a string [find, replace] */
let phrase = "the quick brown fox";
//console.log(phrase);
//console.log(phrase.replace('fox', 'monkey'));

/* Example of breaking down guild/discord name */
let discordName2 = "[YoLoBlob]Jason"
let guildCharEnd = discordName2.indexOf(']') + 1;

console.log(guildCharEnd);

let guildname = discordName2.substring(0, guildCharEnd);

console.log(guildname);

discordName2 = discordName2.substring(guildCharEnd);
// below is easier way to make console logs with strings/variables

let consoleMessage = `The user's name is ${discordName2}.
They're a member of the ${guildname} guild.`

//console.log(`This user's guild => ` + guildname);
//console.log(`This user's name => ` + discordName2)
//console.log(consoleMessage);


