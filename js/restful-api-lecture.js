import * as movieUtils from "./movies.js";

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
        // let result = await movieUtils.setFavorite(movieData);
        // console.log(result);
    });

    // let body = {
    //     "rating": 2
    // }
    // let response = await movieUtils.patchFavorite(3, body);
    // let data = await response.json();
    // console.log(data);

    // await movieUtils.deleteFavorite(4);
    // let favorites = await movieUtils.getFavorites();
    // console.log('All favorites => 'favorites);
    // let favorite = await movieUtils.getFavorite(2);
    // console.log('ONE favorite => 'favorite);
    // Our function is expecting an object, not a string, hence the {} and title
    let searched = await movieUtils.searchFavorite({title: 'The Shawshank Redemption'});
    console.log('Searched favorite => 'searched);
    // console.log(await movieUtils.searchFavorite({genre: 'Comedy'}))


})();