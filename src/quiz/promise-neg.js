const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function hasNegative(arr, idx) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length > idx) {
            setTimeout(() => {
                arr[idx].filter((n) => n < 0).length > 0 ? resolve(arr[idx]) : reject("no negative");
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: invalid idx');
        }
    });
}

const rowSumPromises = [];
for (let x = 0; x < array2D.length; x++) {
    rowSumPromises.push(hasNegative(array2D, x));
}

Promise.any(rowSumPromises)
    .then((row) => {
        console.log(row);
    })
    .catch((err) => console.log(err));