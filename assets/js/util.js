// configMenu manages which menu items to display
// it check the displayMenu object in config.js
// if a property in the object does not have 'on' value
// that property id element's display turn to 'none'
// menu div need to have id with "nemuName" + "Link"

function configMenu() {
  console.log('configMenu function');

  for (const menu in displayMenu) {
    //   if (displayMenu.Home === 'on')
    if (`${displayMenu[menu]}` !== 'on') {
      document.getElementById(`${menu}Link`).style.display = 'none';
      console.log(`${menu}Link`);
    }
  }
}

// displayMenu = {
//   Home: 'on',
//   Entry: 'on',
//   Element: 'on',
// };
