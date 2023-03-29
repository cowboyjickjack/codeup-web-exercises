import {getUser, getLastCommit} from "./github.js";

(async() => {
    let users = await getUser('cowboyjickjack');
    // all of our data
    console.log(users);

    let onlyCommits = users.map(commits => {
        let createdCommit = commits.created_at;
        return {
            createdCommit
        }
    });
    console.log(onlyCommits[0]);
})();



