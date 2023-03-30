import {setFavorite, patchFavorite} from "./movies.js";

(async ()=> {
    document.querySelector('button').addEventListener('click', async function (){
        const title = document.querySelector('#title').value; // value is matching the datatypes in the json database
        const genre = document.querySelector('#genre').value;
        const rating = parseFloat(document.querySelector('#rating').value);
        let movieData = {
            // don't need to do title: 'title', and can use shorthand
            title,
            genre,
            rating
            // DON'T SEND ID BECAUSE PPL DON'T KNOW HOW MANY MOVIES YOU HAVE
            // It'll be a guessing game on their end
        }
        let result = await setFavorite(movieData);
        console.log(result);
    });

    let body = {
        "rating": 2
    }
    let response = await patchFavorite(3, body);
    let data = await response.json();
    console.log(data);
})();