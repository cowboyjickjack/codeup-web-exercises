import {getGitHubUsers, renderGitHubUser} from "./github.js"; // can hold cmd, click, and takes you to the file
// import {randomNumber} from "./utils-module"; // another example
// {}} is specific for a function, not
(async () =>{ // async will immediately run itself - needs no name, doesn't need to be called
    let users = await getGitHubUsers(); // this won't show unless you fire it off
    // here is our meat :)
    console.log(users); // rn, users = an array
    // Render users (creating the stuff that connects with the DOM, onto the screen)
    // but our renderGitHubUser only takes a single object, so we need a forEach
    const usersGrid = document.querySelector('#user-grid'); // now we have the parent
    users.forEach(function (user){
        renderGitHubUser(user, usersGrid);
    });
    // and now we can do whatever else we need to do. Separate concerns!!!


})();