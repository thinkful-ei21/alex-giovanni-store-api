/* global shoppingList, store */
'use strict';


$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });

});



console.log(api.BASE_URL);

// api.createItem('coffee', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   });
// });
