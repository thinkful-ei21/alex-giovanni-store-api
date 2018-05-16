'use strict';
/*global $*/

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alex';
  
  const getItems = function (callback) {
    $.getJSON(BASE_URL+'/items',callback);
  };
  const createItem = function (name, callback){
    const newItem = JSON.stringify({name,});
    $.ajax({
      url: BASE_URL + '/items',
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
    })
  };
  const updateItem = function(id, updateData, callback){
    const newData = JSON.stringify(updateData);
    $.ajax({
      url: BASE_URL + '/items/'+id,
      method: 'PATCH',
      contentType: 'application/json',
      data: newData,
      success:callback,

    })
  };


  return {
    getItems,
    createItem,    
    updateItem,
  };
}());