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

    //individualizing each section of each array
    let hammerPrice = hammer.price;
})();