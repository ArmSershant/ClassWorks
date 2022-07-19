// 4. Groupe by property

let arr = [
  {name: 'Alice', job: 'Data Analyst', country: 'AU'},
  {name: 'Bob', job: 'Pilot', country: 'US'},
  {name: 'Lewis', job: 'Pilot', country: 'US'},
  {name: 'Karen', job: 'Software Eng', country: 'CA'},
  {name: 'Jona', job: 'Painter', country: 'CA'},
  {name: 'Jeremy', job: 'Artist', country: 'SP'},
];

function groupe(arr, prop) {
    let result = [];
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i][prop];
        result.push(word);
    }
    console.log(result);
} 
groupe(arr, 'country');
groupe(arr, 'job');
groupe(arr, 'name');

// result => {
// 	AU: [{name: 'Alice', job: 'Data Analyst', country: 'AU'}],
// 	US: [{name: 'Bob', job: 'Pilot', country: 'US'},
//   {name: 'Lewis', job: 'Pilot', country: 'US'}],
// …… 
// }