// index.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the h1 element by its id
    var headerElement = document.getElementById('dynamicHeader');

    // Modify the content of the h1 element
    headerElement.innerHTML = 'New Header Text!';
});
