function forEachCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr); // Calls the callback with the current element, its index, and the array itself
    }
}

// Example usage:
let numbers = [10, 20, 30];
forEachCustom(numbers, function(element, index, array) {
    console.log('Element:', element, 'Index:', index, 'Array:', array);
});

// Output:
// Element: 10 Index: 0 Array: [10, 20, 30]
// Element: 20 Index: 1 Array: [10, 20, 30]
// Element: 30 Index: 2 Array: [10, 20, 30]
