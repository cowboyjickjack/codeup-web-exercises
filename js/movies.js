export const getFavorites = async () => {
    try {
        let url = `http://localhost:3000/favorites`;
        let options = {
            headers: {
                "Content-Type": `application/json`
            },
        }
        let response = await fetch(url, options);
        let data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getFavorite = async (id) => {
    try {
        let url = `http://localhost:3000/favorites/${id}`;
        let options = {
            headers: {
                "Content-Type": `application/json`
            },
        }
        let response = await fetch(url, options);
        let data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const searchFavorite = async (movie) => {
    let favorites = await getFavorites();

    if (movie.title) {
        let favorite = favorites.find((result) => { // condition we want to be matched
            return movie.title === result.title;
        });
        if (favorite) {
            return favorite;
        } else {
            return 'No movie was found with that title.';
        }
    }
    else if (movie.genre) {
        let favoritesFiltered = favorites.filter((result) => {
           return movie.genre === result.genre;
        });
        if (favoritesFiltered.length > 0) {
            return favoritesFiltered;
        } else {
            return 'No movies were found with that genre.';
        }
    }
}

export const setFavorite = async (postData) => {
    try {
        let url = `http://localhost:3000/favorites`;
        let options = {
            method: "POST", // default method is 'GET', so we must explicitly say 'POST'
            headers: {
                "Content-Type": `application/json`
            },
            body: JSON.stringify(postData) // zipping it all up, before it's sent
        }
        let response = await fetch(url, options);
        let data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const patchFavorite = async (id, movie) => { // selecting id, replacing and editing with movie
    try {
        if (!id) { // since it's in try, it'll throw it into catch
            throw new Error('You must provide an id')
        }
        let url = `http://localhost:3000/favorites`;
        let options = {
            method: "PATCH", // 'PATCH' since we're changing it
            headers: {
                "Content-Type": `application/json/favorites/${id}`
            },
            body: JSON.stringify(movie) // zipping it all up, before it's sent
        }
        let response = await fetch(url, options);
        let data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteFavorite = async (id) => {
    try {
        if (!id) {
            throw new Error('You must provide an id');
        }
        let url = `http://localhost:3000/favorites/${id}`;
        let options = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let response = await fetch(url, options);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}
