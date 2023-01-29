// const random = Math.floor(math.random()*10)
// console.log(random);
// let userName = +prompt()
// let conter = 1

// while (random != userName) {
//    if (random > userName) {
//       alert('more')
//       userName = +prompt()
//       conter++
//    } else if (random < userName) {
//       alert('less')
//    }
//    userName = +prompt()
//    conter++
// }
// alert(`you are right ${conter}`)

const obj = {
   name: 'sasha',       //name это ключ, sasha это значение
   age: 15,
   sex: 'female',
   form: 10,
}
// or
// const obj2 = new Object() or new Array()

// console.log(obj);
// console.log(obj.age);

// const objKeys = Object.keys(obj);
// console.log(objKeys);

// const objValues = Object.values(obj);
// console.log(objValues);

// console.log(obj.isMarried);
// obj.isMarried = false;
// console.log(obj);
// obj.age = '20';
// console.log(obj);

// const obj2 = obj
// console.log(obj2);
// obj2.field = 'gena'
// console.log(obj);                   //оба обьекта изменятся как obj2
// console.log(obj2);


// const obj3 = {}

// for (let prop in obj) {
//    console.log(prop);
//    obj3[prop] = obj[prop]
// }
// console.log(obj3)
// obj3.lol = 'lol';
// console.log(obj);
// console.log(obj3);

// const obj4 = Object.assign(obj)
// console.log('obj4', obj4);
// obj4.lol = 'lol'
// console.log(obj4);

// const obj5 = Object.freeze(obj)
// obj5.ice = 'ice'                     //он не создастся, тк obj5 заморожен
// console.log('obj5', obj5);

// console.log(obj.hasOwnProperty('age'));
// console.log(obj.hasOwnProperty('ice'));


//function declaration
// function sayHello() {
//    console.log('Hello!');
// }
// sayHello();


// function summ(a, b) {
//    console.log(a+b);
// }
// summ(4, 56);
// summ(25, 671);


// function fun (a, b, c) {              //функция
//    console.log(a+b-c);
// }
// fun(34, 429, 578);
// fun(578, 429, 34);


// //function expression
// const summ2 = function(a, b, c) {           //переменная, значение которой равно функции
//    console.log(a+b+c);
// }
// summ2(34, 429, 578);
// summ2(578, 429, 34);


// //arrow function
// const summ3 = (a, b, c) => console.log(a+b-c);           //укороченный вид function expression
// summ3(34, 429, 578);
// summ3(578, 429, 34);


// // (function() {
// //    console.log('hello!'); 
// // })

// function args(a, b, c, d) {           //псевдомассив
//    const sum = a+b+c+d
//    console.log(arguments);
// }
// args(73, 15, 53, 251)


// function args(a, b, c, ...rest) {        //собирает в массив оставшиеся аргументы     
//    const sum = a+b+c
//    console.log(rest);
// }
// args(73, 15, 53, 251, 538, 25, 5)


// const arr = [5, 4, 3, 2, 1]          //выводит числа как строку, а не массив
// console.log(...arr);


function yr(a, b, c) {
   const discr = b*b-4*a*c;
    if (discr > 0) {
      const x1 = (-b+Math.sqrt(discr))/(2*a);
      const x2 = (-b-Math.sqrt(discr))/(2*a);
      console.log(x1);
      console.log(x2);
    } else if (discr < 0) {
      console.log('нет корней');
    } else {
      const x = (-b)/(2*a);
      console.log(x);
    }
}
yr(-4, 28, -49);
yr(-6, 0, 54);
yr(1, -1, 0);
yr(1, 0, -49);
yr(3, -4, 94);


function str (str) {
   let counter = 0
   const arr = [' ', '.', ',', '!']
   for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase() && !arr.includes(str[i])) {      //сколько заглавных букв в строке
         counter++
      } 
   }
   console.log(counter);
}
str('Я люблю котов')