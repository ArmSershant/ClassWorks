// create function that will be take all id values and push in another array
const arr = [
    {
      name: "John",
      id: 1
    },
    {
      name: "Jane",
      id: 2
    },
    {
      name: "Bob",
      id: 3
    },
    {
      name: "Ronaldo",
      id: 4
    }
  ];
//   function getId(arr) {
//     let idArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       idArr.push(arr[i].id);
//     }
//     console.log(idArr);
//   }
//   getId(arr);
  function getId(arr) {
    return arr.map(function(item) {
        console.log(item.id);
    });
  }
  getId(arr);