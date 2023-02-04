//1
// function fun(a, b, c, d) {
//     if (a > b && a > c && a > d) {
//         console.log(a)
//     } else if (b > a && b > c && b > d) {
//         console.log(b);
//     } else if (c > a && c > b && c > d) {
//         console.log(c);
//     } else if (d > a && d > b && d > c) {
//         console.log(d);
//     }
// }
// fun(325, 55, 7, 235)

// const largeArr = new Array();
// const arr = new Array (23, 55, 326, 362, 5);
// find();
// function find() {
//     arr.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
//     console.log(arr[0]);
// }

//2
// function fun(a, b, c, d) {
//     if (a < b && a < c && a < d) {
//         console.log(a)
//     } else if (b < a && b < c && b < d) {
//         console.log(b);
//     } else if (c < a && c < b && c < d) {
//         console.log(c);
//     } else if (d < a && d < b && d < c) {
//         console.log(d);
//     }
// }
// fun(325, 55, 7, 235)

// const largeArr = new Array();
// const arr = new Array (23, 55, 326, 362, 5);
// find();
// function find() {
//     arr.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
//     console.log(arr[0]);
// }

//4
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(13));

//5
// const arr = [];
// while (arr.length < 10) {
//     const a = Math.floor(Math.random() * 100) + 1;
//     if (arr.indexOf(a) === -1) arr.push(a);
// }
// console.log(arr);
// mas()

// function mas() {
//     arr.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
//     console.log(arr[0]);
// }

// function mas() {
//     arr.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);
//     console.log(arr[0]);
// }

// function mas() {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]                      
//     }
//     console.log(sum);
// }

// function mas() {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i] / 10                   
//     }
//     console.log(sum);
// }