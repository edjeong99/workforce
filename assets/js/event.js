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
  $('#elementLink').click(function () {
    toggleMenu();
    displayElement();
  });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMenu() {
  var x = document.getElementById('menuList');
  if (x.className === 'menuList') {
    x.className += ' responsive';
  } else {
    x.className = 'menuList';
  }
}
