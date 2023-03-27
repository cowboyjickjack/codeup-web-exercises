/** THIS FILE WILL BE EXPORTING THESE FUNCTIONS >
 * THAN TYPING THEM IN **/

export const convertToCelcius = temp => {
    let celciusConversion = (temp - 32) * (5/9);
    return (celciusConversion);
}

export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}