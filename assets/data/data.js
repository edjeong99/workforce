function Data() {}

Data.getData = async function () {
  console.log('DATA getData begin');
  // let responds =
  // let result = [];
  // console.log('DATA getData before loop');
  // for (let i = 0; i < responds.length; i++) {
  //   result.push(responds[i].json());
  // }
  // console.log('DATA result = ');
  // console.log(result);
  return await getCurrentPricesFromAPI(['GOOGL', 'AMZN', 'WMT', 'AAPL']);
  // Data.dataList;
};

// Data.dataList = [
//   {
//     id: 1,
//     title: 'title 1 ',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui mi, dictum lobortis suscipit at, posuere bibendum elit. In hac habitasse platea dictumst. Integer nec pulvinar turpis. ',
//   },
//   {
//     id: 2,
//     title: 'title 2 ',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui mi, dictum lobortis suscipit at, posuere bibendum elit. In hac habitasse platea dictumst. Integer nec pulvinar turpis. ',
//   },
//   {
//     id: 3,
//     title: 'title 3 ',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui mi, dictum lobortis suscipit at, posuere bibendum elit. In hac habitasse platea dictumst. Integer nec pulvinar turpis. ',
//   },
//   {
//     id: 4,
//     title: 'title 4 ',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui mi, dictum lobortis suscipit at, posuere bibendum elit. In hac habitasse platea dictumst. Integer nec pulvinar turpis. ',
//   },
//   {
//     id: 5,
//     title: 'title 5 ',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui mi, dictum lobortis suscipit at, posuere bibendum elit. In hac habitasse platea dictumst. Integer nec pulvinar turpis. ',
//   },
//   {
//     id: 6,
//     title: 'title 6 ',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dui mi, dictum lobortis suscipit at, posuere bibendum elit. In hac habitasse platea dictumst. Integer nec pulvinar turpis. ',
//   },
// ];
