import {getGitHubUsers} from "./github.js"; // can hold cmd, click, and takes you to the file
// import {randomNumber} from "./utils-module"; // another example
// {}} is specific for a function, not
(async () =>{ // async will immediately run itself - needs no name, doesn't need to be called
    let users = await getGitHubUsers(); // this won't show unless you fire it off
    // here is our meat :)
    console.log(users);

    // Render users (creating the stuff that connects with the DOM, onto the screen)


})();