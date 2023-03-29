export const getGitHubUsers = async () => { // export will allow this function to be exported // async will utilize await
    // let response = await fetch('https://api.github.com/users'); // this exact url doesn't require a key
    // console.log(response);
    // return response;

    return fetch('https://api.github.com/users').then(response => response.json()).then(data => data);
}