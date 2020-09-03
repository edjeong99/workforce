function init() {
  console.log('App initiated');

  // Registering Service Worker
  // if ('serviceWorker' in navigator) {
  //   console.log('app.js sw register');
  //   navigator.serviceWorker.register('/sw.js');
  // } else console.log('app.js sw register FAILED');

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('sw.js')
        .then((registration) => {
          console.log(
            `Service Worker registered! Scope: ${registration.scope}`
          );
        })
        .catch((err) => {
          console.log(`Service Worker registration failed: ${err}`);
        });
    });
  }

  // init data

  // check config.js to see which menu to display
  configMenu();

  displayList();
}

init();

// Requesting permission for Notifications after clicking on the button
// var button = document.getElementById('notifications');
// button.addEventListener('click', function (e) {
//   Notification.requestPermission().then(function (result) {
//     if (result === 'granted') {
//       randomNotification();
//     }
//   });
// });

// Setting up random Notification
// function randomNotification() {
//   var randomItem = Math.floor(Math.random() * games.length);
//   var notifTitle = games[randomItem].name;
//   var notifBody = 'Created by ' + games[randomItem].author + '.';
//   var notifImg = 'data/img/' + games[randomItem].slug + '.jpg';
//   var options = {
//     body: notifBody,
//     icon: notifImg,
//   };
//   var notif = new Notification(notifTitle, options);
//   setTimeout(randomNotification, 30000);
// }

// Progressive loading images
// var imagesToLoad = document.querySelectorAll('img[data-src]');
// var loadImages = function (image) {
//   image.setAttribute('src', image.getAttribute('data-src'));
//   image.onload = function () {
//     image.removeAttribute('data-src');
//   };
// };
// if ('IntersectionObserver' in window) {
//   var observer = new IntersectionObserver(function (items, observer) {
//     items.forEach(function (item) {
//       if (item.isIntersecting) {
//         loadImages(item.target);
//         observer.unobserve(item.target);
//       }
//     });
//   });
//   imagesToLoad.forEach(function (img) {
//     observer.observe(img);
//   });
// } else {
//   imagesToLoad.forEach(function (img) {
//     loadImages(img);
//   });
// }
