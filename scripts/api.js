const api = (function() {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alex';
    const getItems = function (callback) {
        callback('api module works!');
    }
    return {
        getItems,
        
    };
}());