// Handling what to display depends on user activity

function displayList() {
  console.log('DisplayList function start');

  displayMenuNavbar('List');

  // need to check content and update if needed
  fillListContent();

  $('#displayListSection').show();
  $('#displayEntrySection').hide();
  $('#displayElementSection').hide();
}

function displayEntry() {
  console.log('displayEntry function start');
  displayMenuNavbar('Entry');
  fillEntryContent();
  $('#displayEntrySection').show();
  $('#displayListSection').hide();
  $('#displayElementSection').hide();
}

function displayElement() {
  displayMenuNavbar('Element');
  fillElementContent();

  $('#displayElementSection').show();
  $('#displayEntrySection').hide();
  $('#displayListSection').hide();
}
// display current menu item in topnavbar
function displayMenuNavbar(name) {
  console.log('displayMenuNavbar function start   NAME = ', name);
  document.getElementById('currentMenuDisplay').innerHTML = name;
}

// updateDisplayListContent update DOM where lists are being displayed
function fillListContent() {
  // get the latest lists
  var list = Data.getData();
  console.log(list);

  // Generating content based on the template
  var template =
    '<article>\n\
	<h3>#ID. TITLE</h3>\n\
	<ul>\n\
	<li>CONTENT</li>\n\
		</ul>\n\
</article>';

  var content = '';

  // clean the displaying content
  document.getElementById('listDisplayingDiv').innerHTML = content;

  for (var i = 0; i < list.length; i++) {
    var entry = template
      .replace(/ID/g, list[i].id)
      .replace(/TITLE/g, list[i].title)
      .replace(/CONTENT/g, list[i].content);
    content += entry;
  }
  document.getElementById('listDisplayingDiv').innerHTML = content;
}

function fillEntryContent() {
  var content = '';
  content =
    '<div id="entryTab"> <div>By Voucher</div><div>By V2</div><div>Entery</div></div>';

  content +=
    '<div id="entryInput"><input></input><div id="searchButton">SERCH</div></div>';
  document.getElementById('entryDisplayingDiv').innerHTML = content;
}

function fillElementContent() {
  var content = '';
  content = '<div> This is Element Div</div>';

  content += '<div >2nd Line of Element</div>';
  document.getElementById('elementDisplayingDiv').innerHTML = content;
}
