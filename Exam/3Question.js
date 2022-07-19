// 3. Remove duplicates in an array.

let dupes = [1,2,3,'a','a','f',3,4,2,'d','d'];

function removeDups(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    console.log(result);
};
removeDups(dupes);