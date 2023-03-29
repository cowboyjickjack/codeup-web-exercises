import {getGitHubUsers} from "./github.js"; // can hold cmd, click, and takes you to the file
// {}} is specific for a function, not
(async () =>{ // async will immediately run itself - needs no name, doesn't need to be called
    let users = getGitHubUsers();
    console.log(users);


})();