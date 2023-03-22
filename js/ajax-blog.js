(async function(){
    "use strict"

    const blogPoster = async (info) => {
        let response = await fetch('../data/ajax-blog.json');
        let data = await response.json();
        return data;
    }
    let postings = await blogPoster();
    console.log(postings);

    // singling each array
    let firstPosting = postings[0];
    let secondPosting = postings[1];

    // FIRST POSTING
    $('#first').append([
        `<h4>${firstPosting.title}</h4>`,
        `<div>${firstPosting.content}</div>`,
        `<div>${firstPosting.categories}</div>`,
        `<div>${firstPosting.date}</div>`
    ].join(''));

    // FIRST POSTING
    $('#second').append([
        `<h4>${secondPosting.title}</h4>`,
        `<div>${secondPosting.content}</div>`,
        `<div>${secondPosting.categories}</div>`,
        `<div>${secondPosting.date}</div>`
    ].join(''));


})();