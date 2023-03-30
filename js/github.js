import {keys} from "./keys.js";

export const getGitHubUsers = async () => { // export will allow this function to be exported // async will utilize await
    try { // try/catch is like if/else
        let response = await fetch('https://api.github.com/users'); // this exact url doesn't require a key
        let data = await response.json() // don't want to parse response variable(promise) until it's done resolving
        // now you have the meat from the deli
        return data;
    } catch(error){
        console.log(error);
    }
    // the .then syntax (older) compared to await
    // return fetch('https://api.github.com/users')
    //     .then(response => response.json())
    //     .then(data => data)
    //     .catch(error => {
    //         console.log(error); // do not forget! Very important to have a plan when things go wrong
    //     });
}

/** FETCHING WITH API KEY **/
export const getUser = async(username)=>{
    try{
        const url = `https://api.github.com/users/${username}/events/public`;
        const options = {
            headers: {
                'Authorization': `token ${keys.GITHUB_API_KEY}`
            }
        }
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

export const getLastCommit = (userEvents)=>{
    let commits = userEvents.filter(function(e){
        return e.type === "PushEvent";
    });
    return commits[0];
}

// PARENT = don't want to define where it renders as something that is set - want this to be versatile
// when this function is called, you need a singular user object, and then the node
export const renderGitHubUser = (user, parent) => { // doesn't need async bc we already completed the FETCH/DATA
    // renders something onto the DOM
    // encouraged to CREATE THE NODE!!! so you keep the ability to add event listeners, etc
    // creating the parent
    const element = document.createElement('div');
    element.classList.add('user-card'); // adding class to div
    element.innerHTML = `
        <div class="img-wrapper">
            <img class="avatar" src="${user.avatar_url}" alt="User Image">
        </div>
        <h2>${user.login}</h2>
        <a target="_blank" href="${user.html_url}">Go to Profile</a>
        <button>Remove</button>
    `;
    // to make the 'remove' button work and remove the whole card, we need an event listener
    element.querySelector('button').addEventListener('click', function () {
       element.remove();
    });
    // then, append it
    parent.appendChild(element);


    // TODO: Create a function that accepts a GitHub username,
    //   and returns a promise that resolves returning just the
    //   date of the last commit that user made.

// export  const lastCommitDate = (user) => {
//
//
// }
};