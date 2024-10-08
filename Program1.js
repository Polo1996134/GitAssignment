let numbers1 = [2, 3, 4, 5];
let squares = numbers1.map(function(num) {
    return num * num;
});
console.log(squares); // Expected Output: [4, 9, 16, 25]

let numbers2 = [1, 2, 3, 4, 5, 6];
let evens = numbers2.filter(function(num) {
    return num % 2 === 0;
});
console.log(evens); // Expected Output: [2, 4, 6]

let numbers3 = [5, 10, 15, 20];
let sum = numbers3.reduce(function(acc, num) {
    return acc + num;
}, 0);
console.log(sum); // Expected Output: 50

let numbers4 = [1, 2, 3, 4, 5];
let result = numbers4.filter(function(num) {
    return num % 2 === 0;
}).map(function(num) {
    return num * num;
}).reduce(function(acc, num) {
    return acc + num;
}, 0);
console.log(result); // Expected Output: 20 (Explanation: [2, 4] -> [4, 16] -> 4 + 16 = 20)

