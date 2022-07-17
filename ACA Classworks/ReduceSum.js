// create function with reduce() that will be sum array elements
function reduceSum(arr) {
    console.log(arr.reduce((acc, curr) => acc + curr));
}
reduceSum([1, 2, 3, 4, 5]);