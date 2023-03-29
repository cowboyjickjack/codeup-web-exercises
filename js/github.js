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
    // return fetch('https://api.github.com/users').then(response => response.json()).then(data => data);
}