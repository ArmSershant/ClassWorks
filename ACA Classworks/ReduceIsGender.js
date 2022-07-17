// function GetObj(arr) {
//     return arr.reduce(
//       (current, item) => {
//         if (item.gender === "male") {
//           current.men.push(item);
//           return current;
//         } else if (item.gender === "female") {
//           current.women.push(item);
//           return current;
//         }
//       },
//       {
//         women: [],
//         men: []
//       }
//     );
//   }
    const arr = [
        {
          name: "John",
          gender: "male"
        },
        {
          name: "Jane",
          gender: "female"
        },
        {
          name: "Bob",
          gender: "male"
        },
        {
          name: "Ronaldo",
          gender: "male"
        }
      ];
      let total ={women: [], men: []};
function getObj(arr) {
    let men = arr.filter((gen) => { return gen.gender === "male";});
    let female = arr.filter((gen) => {return gen.gender === "female"});
    return total;
}
getObj();