# Separation of Concerns (SoC) and Module Syntax

JavaScript is a powerful language used for both frontend and backend web development. The module syntax is an important feature of JavaScript that allows us to organize our code into reusable modules. A module is a file that contains JavaScript code, and it can be used in other parts of our application. This lesson will cover how to use the module syntax with local files in JavaScript.

## But First: What is Separation of Concerns?

When we write code, we want to make sure that our code is organized and easy to understand. We can do this by separating our code into different files. This is called separation of concern. Separation of concern is a software design principle that states that **every part of our code should have a single responsibility**. This means that each part of our code should be responsible for a single task. This makes our code easier to understand, maintain and reuse.

We've practiced separation of concern to some degree by putting utility functions in a separate file, which we called `utils.js`. We can take this a step further by separating our code into different files based on its categorical purpose.

Let's say we're building a web application that allows users to create and manage blog posts. We could have two JavaScript files: `posts.js` and `comments.js`. The `posts.js` file contains functions for creating, editing, and deleting blog posts, while the `comments.js` file contains functions for **managing comments** on blog posts.

The problem that can quickly occur with this methodology, however, is **"circular dependencies"**.

## Circular Dependencies

Circular dependency occurs when two or more JavaScript files depend on each other to function properly. This occurs when a script requires a function or variable from another script, and that second script also requires a function or variable from the first script. This creates a cycle that cannot be resolved by simply loading the scripts in the correct order.

![Circular Dependencies](../images/circular-graph.png)

While circular dependencies are generally something you can avoid by organizing your code properly, there are some cases where they are unavoidable -- especially in larger and more complex applications.

Let's go back to our blog post example. Let's say that the `posts.js` file contains a function called `getPost()` that retrieves all the data on a post. This function requires a function from the `comments.js` file to work properly.

`posts.js`:
```js
const getPost = (id) => {
  // get post data from database
  const post = getPostFromDatabase(id);

  // get comments for post
  const comments = getCommentsForPost(id); // requires function from comments.js

  // return post data with comments
  return { ...post, comments };
};
...
```

Similarly, the `comments.js` file contains a function called `getPostForComment(id)` that retrieves post data for a particular comment. This requires a function from the `posts.js` file to work properly.

`comments.js`:
```js
const getPostForComment = (id) => {
  // get comment from database
  const comment = getCommentFromDatabase(id);

  // get post for comment
  const post = getPost(comment.postId); // requires function from posts.js

  // return post data
  return post;
};
```

In this example, the `posts.js` file requires a function from the `comments.js` file to work properly, and the `comments.js` file requires a function from the `posts.js` file to work properly. This creates a circular dependency, and you would be unable to resolve this by simply loading the scripts in the correct order in your HTML file.

Enter the module syntax.

## Module Syntax

The module syntax is a way to organize our code into separate files, and then selectively import and export the code from those files. This serves to better adhere to the separation of concern principle, and also helps us avoid circular dependency issues.

### Creating a Module

A module can be defined simply as a JavaScript file that uses module keywords and syntax. In other words, once module keywords are used anywhere in the code, the file is then considered a module. This has the browser treat it differently in a few ways:

- All variables and functions defined in the file become block scoped. This means that they cannot be accessed by other JavaScript files from outside the file without being exported. This is a good thing, because it prevents variables and functions from being accidentally overwritten by other files.
- The file is executed in strict mode by default.
- You can `import` and `export` code to/from other modules (we'll go over this next)
- Any module JavaScript files that are sourced in an HTML file must be loaded with the `type="module"` attribute. This tells the browser to load the file as a module. *Keep in mind, your HTML file won't need to have `<script>` elements for files that are imported into other files. This now gets handled in JavaScript.*
- When importing code, the source file must be in the same project and referenced with a relative path. This means that you cannot import code from a file on a different server.

> **Note:** Due to popular demand, importing externally hosted files is possible, but is still in the process of being standardized. As of writing this curriculum, externally hosted modules can be resolved with an import map. Import maps are a relatively new feature, and is not supported across all major browsers. For more information, see [this article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps).

Let's take our `utils.js` file and turn it into a module. To do this, we're going to create a new file. We don't want to change our original `utils.js` file, because once we use module syntax to export functions, it can no longer be sourced in HTML in a `<script>` element without having a `type="module"` attribute. It would break any of our current html files that have it sourced in a normal `<script>` element, and we'd have to go back to each one to add the `type` attribute. Instead, let's create a new file called `utils-module.js`.

Now let's define some JavaScript code in this file. We'll start by bringing over our function called `randomNumber()` from `utils.js` that returns a random number between a minimum and maximum value. Copy and paste this function into our `utils-module.js` file.

`utils-module.js`:
```js
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```

Now let's export this function from the module. We can do this by using the `export` keyword when defining the function.

`utils-module.js`:
```js
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```

With this code, we've created a module that exports a function called `randomNumber()`. Multiple functions/variables can be exported from a single module. Let's bring over more functions from our `utils.js` file.

`utils-module.js`:
```js
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export function isNumericAndNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== "boolean" && typeof input !== "string";
}
export function formatToLocaleString(number, language='en', country='US', currency='USD'){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}
export function arrayOfUniqueRandomNumbers(lengthOfArray){
    const array = [];
    for (let i = 0; i < lengthOfArray; i++){
        let newRandomNumber = randomNumber(1, lengthOfArray + 100);
        while(array.includes(newRandomNumber)){
            newRandomNumber = randomNumber(1, lengthOfArray + 100);
        }
        array.push(newRandomNumber);
    }
    return array;
}
```

Congratulations! You've just created your first module! Now let's see how we can import these functions into another file.

### Importing a Module

Importing a module is the process of bringing code from a module into another file. Just like `export` keyword, we can import using the `import` keyword. There are some syntax requirements for the `import` keyword to keep in mind, though.

#### Declaring a Script as a Module
First, we have to declare our script as a module. We can do this by adding the `type="module"` attribute to our `<script>` element. This is a hypothetical example, so we'll just assume this script is sourced on our homepage, `index.html`, and is called `global.js`.

`index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <script type="module" src="js/global.js"></script>
    <!-- notice the "type" attribute on the script -->
</body>
```
Without this attribute, the script will not be treated as a module, and the `import` keyword would cause an error. Also, when we declare a script as a module, it automatically changes the block scope of the script. This means that variables defined in the script will not be accessible outside the script. This is a good thing, because it prevents variables from being accidentally overwritten by other scripts.

#### Importing from another Module

Now that we've declared our script as a module, we can import code from another module. We'll start by importing just the `randomNumber()` function from our `utils-module.js` file. We can do this by using the `import` keyword, followed by the name of the function we want to import, and then the relative path to the module.

> **Note:** The relative path to the module is relative to the current file. If we're importing a module from the same directory as the current file, we can just use the name of the file. If we're importing a module from a different directory, we'll need to use the relative path to the module. Also, ***import statements must be at the top of the file, before any other code.***

`global.js`:
```js
import { randomNumber } from './utils-module.js';
```

Now that we've imported the `randomNumber()` function, we can use it in our code. Let's create a new variable called `myRandomNum` and assign it the value of `randomNumber(1, 100)`. We can then log this variable to the console.

`global.js`:
```js
import { randomNumber } from './utils-module.js';

const myRandomNum = randomNumber(1, 100);
console.log(myRandomNum);
```

If we open our browser's console, we should see a random number between 1 and 100 logged to the console. We can also import multiple functions from a module. Let's import the `isNumericAndNotNaN()` function from our `utils-module.js` file.

`global.js`:
```js
import { randomNumber, isNumericAndNotNaN } from './utils-module.js';

const myRandomNum = randomNumber(1, 100);
console.log(myRandomNum);

const isNumeric = isNumericAndNotNaN(5);
console.log(isNumeric);
```

Here, we are selectively importing the `randomNumber()` and `isNumericAndNotNaN()` functions from our `utils-module.js` file. We can also import all the functions from a module by using the `*` wildcard character. When using this method, we are importing every function or variable that is exported from `utils-module.js` and assigning an alias to use them. Let's import all the functions from our `utils-module.js` file.

`global.js`:
```js
import * as utils from './utils-module.js';

const myRandomNum = utils.randomNumber(1, 100);
console.log(myRandomNum);

const isNumeric = utils.isNumericAndNotNaN(5);
console.log(isNumeric);
```

> **Note:** The alias `utils` is arbitrary and can be named anything. It's best to use a name that is descriptive of the module. In this case, we're importing all the functions from our `utils-module.js` file, so we'll use the alias `utils`.

The alias is required when importing all the functions from a module, but we can also use it when selectively importing functions. Let's selectively import the `randomNumber()` function from our `utils-module.js` file and rename it with an alias.

`global.js`:
```js
import { randomNumber as random } from './utils-module.js';

const myRandomNum = random(1, 100);
console.log(myRandomNum);
```

This is a good way to rename functions or variables that might have long names in their source file, or if we're importing functions from two different sources that coincidentally have the same name; ensuring that we don't accidentally overwrite a function or variable.

[//]: # (Recap of the Module Syntax)

## Recap of the Module Syntax

We've covered a lot of ground in this lesson, so let's recap what we've learned.

### Exporting a Module

To export a module, we use the `export` keyword. We can export a function, variable, or constant. We can also export multiple functions, variables, or constants from a single module. Here's an example of exporting a function.

`utils-module.js`:
```js
export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```

### Declaring a Script as a Module

To declare a script as a module, we add the `type="module"` attribute to our `<script>` element. This attribute tells the browser that the script should be treated as a module. Here's an example of declaring a script as a module.

`index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <script type="module" src="js/global.js"></script>
</body>
```

### Importing a Module

To import a module, we use the `import` keyword. We can import a single function, variable, or constant, or we can import all the functions, variables, or constants from a module. Here's an example of importing a single function.

`global.js`:
```js
import { randomNumber } from './utils-module.js';
```