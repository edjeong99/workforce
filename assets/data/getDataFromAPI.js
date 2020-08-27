// Key  pk_9d1575de6ba8426b9a036edc8cd74274

// https://sandbox.iexapis.com/

// IBM annual financial
// https://cloud.iexapis.com/stable/stock/IBM/financials?token=YOUR_TOKEN_HERE&period=annual

// Exxon current price
// https://cloud.iexapis.com/stable/stock/XOM/quote?token=YOUR_TOKEN_HERE

// const temp = function () {
//   async function getData() {
//     let URL =
//       'https://cloud.iexapis.com/stable/stock/XOM/quote?token=pk_9d1575de6ba8426b9a036edc8cd74274';
//     let response = await fetch(URL);
//     let data = await response.json();
//     return data;
//   }
//   getData().then((data) => console.log(data));
// };

// temp();
function getDataFromAPI() {
  const axios = require('axios');
  let URL =
    'https://cloud.iexapis.com/stable/stock/XOM/quote?token=pk_9d1575de6ba8426b9a036edc8cd74274';

  axios
    .get(URL)
    .then((response) => {
      console.log(response.data);
      return response.data;
      // console.log(response.data.explanation);
    })
    .catch((error) => {
      console.log(error);
    });
}
