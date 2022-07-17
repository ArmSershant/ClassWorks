// create function that accepts 2 arrays of words and returns the common words from each example arr1 ["dog", "cat", "parrot"] arr2 ["lizard", "rat", "cat"]
function commonWords() {
    let arr1 = ["dog", "cat", "cat", "parrot"];
    let arr2 = ["lizard", "rat", "cat"];
    let obj = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                Object.keys(obj, { [arr1[i]]: arr1[i] });
                obj.push(arr1[i]);
            }
        }
    }
    console.log(obj);
}
commonWords();