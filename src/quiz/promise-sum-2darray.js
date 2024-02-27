const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumRow(arr, idx) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(arr.length > idx) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr[idx].length; i++) {
                    sum += arr[idx][i];
                }
                console.log('resolving ... ');
                resolve(sum);
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
    rowSumPromises.push(sumRow(array2D, x));
}

Promise.all(rowSumPromises)
    .then((rowSums) => {
        let sum = 0;
        rowSums.forEach((s) => sum += s);
        console.log(sum);
    })
    .catch((err) => console.log(err));