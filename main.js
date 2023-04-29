'use strict';
const main = () => {
  // Main

  //


};

window.addEventListener('load', main);
// Select the navigation menu element(s)
var menuItems = $('.nav-header');

// Add click event listener(s)
menuItems.on('click', function() {
  // Implement the click event handler(s)
  $(this).toggleClass('active');
});
