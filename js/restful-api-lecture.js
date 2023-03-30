const setPost = async (data) => {
    let url = ``;
    let options = {
        method: "POST",
        header: {
            "Authorization": `token kdfjasdkdfaioef45432l`
        },
        body: ''
    }
    let response = await fetch(url, options);
}

(async ()=> {
    let blogPost = {
        "title": "I love lamp!",
        "body": "Pokem ipsum dolor sit amet Girafarig Piloswine Houndour to train them is my cause Magikarp used Splash Shroomish. Charizard Bisharp Swinub Lanturn Metagross Misdreavus Aerodactyl."
    }
    let result = await setPost(blogPost);

})();