// 1. Use array methods to turn data into result

let data = [
  ["The","red", "horse"],
  ["Plane","over","the","ocean"],
  ["Chocolate","ice","cream","is","awesome"], 
  ["this","is","a","long","sentence"]
]

function groupeWords(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let word = array[i].join(" ");
        result.push(word);
    }
    console.log(result);
}
groupeWords(data);