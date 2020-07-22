// Handling what to display depends on user activity

function displayList() {
  console.log('DisplayList function start');

  displayMenuNavbar('List');

  // need to check content and update if needed
  updateDisplayListContent();

  $('#displayListSection').show();
  $('#displayEntrySection').hide();
}

function displayEntry() {
  console.log('displayEntry function start');
  displayMenuNavbar('Entry');
  fillEntryContent();
  $('#displayEntrySection').show();
  $('#displayListSection').hide();
}

// display current menu item in topnavbar
function displayMenuNavbar(name) {
  console.log('displayMenuNavbar function start   NAME = ', name);
  document.getElementById('currentMenuDisplay').innerHTML = name;
}

// updateDisplayListContent update DOM where lists are being displayed
function updateDisplayListContent() {
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
  document.getElementById('EntryDisplayingDiv').innerHTML = content;
}
