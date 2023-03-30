/** FETCHING PLANET INFO **/
export const getPlanet = async (id = 1) => {
    // id = 1 is a default value in case no id is given to select planet
    try {
        let response = await fetch(`https://swapi.dev/api/planets/${id}`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

/** FETCHING CHARACTER INFO **/
export const getCharacter = async (id = 1) => {
    try {
        let response = await fetch(`https://swapi.dev/api/people/${id}`);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

/** FETCHING EYE COLOR INFO **/
export const getEyeColor = async (id = 1) => {
    try {
        let character = await getCharacter(id);
        return character.eye_color;
    } catch (error) {
        console.log(error);
    }
};

