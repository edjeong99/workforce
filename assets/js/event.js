// Collection of listening and responding to click events

$(document).ready(function () {
  $('#homeLink').click(function () {
    displayList();
  });
  $('#entryLink').click(function () {
    displayEntry();
  });
});

// toggle displaying menu when menu icon is clicked.
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  console.log('navBar toggle clicked');
  mainNav.classList.toggle('active');
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
