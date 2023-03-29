import {getGitHubUsers, fetchGitHubUsersWithKey} from "./github.js";

(async() => {
    let users = await fetchGitHubUsersWithKey();
    // all of our data
    console.log(users);


})();



