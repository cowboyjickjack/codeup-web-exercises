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
    // let hammer = inventory[0];
    // let drill = inventory[1];
    // let mower = inventory[2];
    // let screwdriver = inventory[3];
    //
    // $('#insertProducts').append([
    //     '<tr>',
    //     `<td>${hammer.title}</td>`,
    //     `<td>${hammer.quantity}</td>`,
    //     `<td>${hammer.price}</td>`,
    //     `<td>${hammer.categories}</td>`,
    //     '</tr>',
    //     '<tr>',
    //     `<td>${drill.title}</td>`,
    //     `<td>${drill.quantity}</td>`,
    //     `<td>${drill.price}</td>`,
    //     `<td>${drill.categories}</td>`,
    //     '</tr>',
    //     '<tr>',
    //     `<td>${mower.title}</td>`,
    //     `<td>${mower.quantity}</td>`,
    //     `<td>${mower.price}</td>`,
    //     `<td>${mower.categories}</td>`,
    //     '</tr>',
    //     '<tr>',
    //     `<td>${screwdriver.title}</td>`,
    //     `<td>${screwdriver.quantity}</td>`,
    //     `<td>${screwdriver.price}</td>`,
    //     `<td>${screwdriver.categories}</td>`,
    //     '</tr>'
    // ].join(''));


    /** WALKTHROUGH **/

    // function that builds the table
    const buildTable = (inventory) => {
        inventory.forEach(function (tool){ // since inventory = array, and only need element, no index needed
            let row = document.createElement('tr'); // create a row by calling node
            // below creates everything that lives inside
            row.innerHTML = ` 
            <td>${tool.title}</td>
            <td>${tool.quantity}</td>
            <td>${formatMoney(tool.price)}</td>
            <td>${tool.categories.join(', ')}</td>
            `;
            document.querySelector('#insertProducts').appendChild(row);
        });
    }
    buildTable(inventory);

    document.querySelector('button').addEventListener('click', async function (){
        // when clicked, we're clearing out the data, and refreshing the data
        // get to resuse getInventory function, but first, clear table
        document.querySelector('#insertProducts').innerHTML = '';
        // then, we get the data again
        let inventory = await getInventory();
        buildTable(inventory);
    });
})();

// $(document).ready(function(){
//     $("button").click(function(){
//         location.reload();
//     });
// });

