// Collection of listening and responding to click events

$(document).ready(function () {
  $('#homeLink').click(function () {
    toggleMenu();
    displayList();
  });
  $('#entryLink').click(function () {
    toggleMenu();
    displayEntry();
  });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMenu() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
