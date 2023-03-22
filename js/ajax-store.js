(async function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    const getInventory = async (info) => {
        let response = await fetch('../data/inventory.json');
        let data = await response.json();
        return data;
    }
    let inventory = await getInventory();
    console.log(inventory);

    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements

    // singling out each array
    let hammer = inventory[0];
    let drill = inventory[1];
    let mower = inventory[2];
    let screwdriver = inventory[3];

    $('#insertProducts').append([
        '<tr>',
        `<td>${hammer.title}</td>`,
        `<td>${hammer.quantity}</td>`,
        `<td>${hammer.price}</td>`,
        `<td>${hammer.categories}</td>`,
        '</tr>',
        '<tr>',
        `<td>${drill.title}</td>`,
        `<td>${drill.quantity}</td>`,
        `<td>${drill.price}</td>`,
        `<td>${drill.categories}</td>`,
        '</tr>',
        '<tr>',
        `<td>${mower.title}</td>`,
        `<td>${mower.quantity}</td>`,
        `<td>${mower.price}</td>`,
        `<td>${mower.categories}</td>`,
        '</tr>',
        '<tr>',
        `<td>${screwdriver.title}</td>`,
        `<td>${screwdriver.quantity}</td>`,
        `<td>${screwdriver.price}</td>`,
        `<td>${screwdriver.categories}</td>`,
        '</tr>'
    ].join(''));


})();

$(document).ready(function(){
    $("button").click(function(){
        location.reload();
    });
});

