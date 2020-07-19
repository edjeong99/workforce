// Handling what to display depends on user activity

function displayList() {
  console.log('DisplayList function start');
  $('#displayList').show();
  $('#displayEntry').hide();
}

function displayEntry() {
  console.log('displayEntry function start');
  $('#displayEntry').show();
  $('#displayList').hide();
}
