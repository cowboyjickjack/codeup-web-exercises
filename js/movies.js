export const setFavorite = async (postData) => {
    try {
        let url = `http://localhost:3000/favorites`;
        let options = {
            method: "POST", // default method is 'GET', so we must explicitly say 'POST'
            headers: {
                "Content-Type": `application/json`
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