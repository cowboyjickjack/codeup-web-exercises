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
    return fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.log(error); // do not forget! Very important to have a plan when things go wrong
        });
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
            <img class="avatar" src="https://via.placeholder.com/300x300?" alt="User Image">
        </div>
        <h2>mojombo</h2>
        <a href="#" target="_blank">Go to Profile</a>
        <button>Remove</button>
    `;
    // to make the 'remove' button work and remove the whole card, we need an event listener
    element.querySelector('button').addEventListener('click', function () {
       element.remove();
    });
    // then, append it
    parent.appendChild(element);
};