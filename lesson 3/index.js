// const str = 'dfjbkbnhlebn'
// const arr = str.split('')
// console.log(arr)

// arr[0] = arr[0].toUpperCase
// arr[2] = arr[2].toUpperCase
// arr[4] = arr[4].toUpperCase
// arr[6] = arr[6].toUpperCase
// arr[8] = arr[8].toUpperCase
// arr[10] = arr[10].toUpperCase

// arr[1] = arr[1].toLowerCase
// arr[3] = arr[3].toLowerCase
// arr[5] = arr[5].toLowerCase
// arr[7] = arr[7].toLowerCase
// arr[9] = arr[9].toLowerCase
// arr[11] = arr[11].toLowerCase

// const str1 = 'FKLHBHNAE'
// const arr1 = str1.toLowerCase().split('')
// console.log(arr1)
// console.log(arr.join(''))

// const age = 15

// if (age > 18) {
//    console.log('true')
// } else if (age < 18) {
//    console.log('false')
// } else {
//    console.log('true');
// }


// <= //меньше
// >= //больше
// == or === //сравнение значений
// != //не строго не равно
// !== //строго не равно
// % //остаток от деления
// && //и
// || //или

console.log(1 == '1') //true (нестрого)
console.log(1 === '1'); //false (строго)


const n = 'vasya'

if (n !== 'vasya') {
   console.log('yes')
}


console.log(27475957 % 714); //не кратно
console.log(7542156 % 2); //кратно


const UserName = 'rosemary'

switch (UserName) {
   case 'mike':
      console.log('hello, mike')
      break;

   case 'mary':
      console.log('hello, mary');
      break;

   case 'nick':
      console.log('hello, nick');
      break;

   default:
      console.log('who are you?');
      break;
}


// switch (UserName) {
//    case 'mike':
//    case 'nick':
//       console.log('hello, gays');
//       break;

//    case 'mary':
//       console.log('hello, mary');
//       break;

//    default:
//       console.log('who are you?');
//       break;
// }


const sex = 'male'
const age = 25
const hairColor = 'pink'

if ((sex === 'male' || age >= 25) && hairColor !== 'pink') {
   console.log('you are welcome')
} else {
   console.log('poshel nahui')
}


// let i = 5

// while (i > 0) {
//    alert(i)
//    i++ //прибавляем 1
//    if (i === 10) {           //есть четкое значение
//       break;
//    }
// } 

// while (i > -1) {
//    console.log(i);     //бесконечный цикл, который сломает к хуям ваш браузер
//    i++
// }


// let l = 5

// do {
//    alert('l = ', l)               //сначала делает, потом думает
//    l++
// } while (l < 5);


// while (i < 5) {
//    alert(i)
//    i++ 
// }


for (let i = 0; i < 10; i++) {
   if (i % 2 !== 0) {           //=== четное, !== нечетное
      console.log(i)
   }
}


const arr = [58, 755, 8, 90, 67, 294, 7853, 4, 69]

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

for (let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 === 0) {            //выводит четные элементы массива
      console.log(arr[i]);
   }
}


for (let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 === 0 && i % 2 !== 0) {            //выводит четные элементы массива на нечетных позициях
      console.log(arr[i]);
   }
}


let sum = 0

// for (let i = 0; i < arr.length; i++) {
//    sum = sum + arr[i]                              //сумма
// }
// console.log(sum);


for (let i = 0; i < arr.length; i++) {
   sum = sum + arr[i]                            //сумма на каждом шаге
   console.log(sum);
}