// src/helpers.js

//     This file should export two array helper functions:

//         choice(items): returns a randomly selected item from array of items
//         remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
  }

function remove(item, items) {
    let itemIsIn = (items.indexOf(item) !== -1);

    return(
        itemIsIn ? items.splice(items.indexOf(item), 1) : undefined
    )
    
}

export {choice, remove}
