const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = arr.reduce(function (acc, curr) {
    return acc += curr;
}, 0)

console.log(sum);
