// // const obj = {
// //    firstName: 'sasha',
// //    secondName: 'zhitnik',
// //    info: function() {
// //       console.log(`${this.firstName} ${this.secondName}`);
// //    }
// // }

// // obj.info()

// const o1 = {
//    firstName: 'sanya',
//    secondName: 'shumilyak',
// }

// // //1 способ
// // obj.info.bind(o1)();    //сразу вызываем функцию с помощью вторых скобок
// // //or
// // // const bindFunction = obj.info.bind(o1)
// // // bindFunction()

// const o2 = {
//    firstName: 'persy',
//    secondName: 'geckson',
// }

// // obj.info.call(o2)

// const o3 = {
//    firstName: 'doctor',
//    secondName: 'who',
// }
// obj.info.apply(o3)

// const obj = {
//    firstName: 'sasha',
//    secondName: 'zhitnik',
//    info: function(phone, email) {
//       console.log(`${this.firstName} ${this.secondName}`);
//       if(phone && email) {
//          console.log('Phone: ', phone)
//          console.log('Email: ', email)
//       }
//    }
// }

// const bindFunction = obj.info.bind(o1)                   //создает новую функцию
// bindFunction('111-11-11', 'sanyashumilyak@gmail.com')      //дополнительно создали телефон и имейл и вызвали вместе с инфо

// obj.info.call(o2, '222-22-22', 'percy@gmail.com')       //сразу вызывает новую функцию
// obj.info.apply(o3, ['333-33-33', 'doc@gmail.com'])       //сразу вызывается, сначала контекст, потом массив



// const promise = new Promise( (resolve, regect) => {      //завершился успешно, завершился с ошибкой
//    // setTimeout( () => resolve('done!'), 2000) 
//    setTimeout( () => regect('error!'), 2000)                            //стрелочная функция, 2000 милисекунд
// })
// console.log(promise);
// promise.then( 
//    (result) => console.log(result) //,          //только для правильных
//    // (error) => console.log(error)
// )
// .catch( (error) => console.log(error))       //только для ошибок
// .finally ( () => console.log('finally'))     //выполнится в любом случае



// const url = 'https://jsonplaceholder.typicode.com/users/1'

// const f = async () => {
//    await fetch(url)
//       .then(response => response.json())
//       .then(json => console.log(json))
// }

// const a = async () => {
//    console.log('start');
//    await f()                 //дожидается, пока выполнится функция f и только потом выводит end
//    console.log('end');
// }

// // a()


// const err = () => {
//    throw 'some error =('
// }

// const tryCatch = async () => {
//    try {
//       await a()
//       // err()
//    } catch(error) {
//       console.log(error);
//    } finally {
//       console.log('finally');
//    }
// }

// tryCatch()


// const usersUrl = 'https://jsonplaceholder.typicode.com/users'
// async function getUsers() {
//    let arr;
//    await fetch(usersUrl)                                   //вывели 10 юзеров
//       .then(response => response.json())
//       .then(users => arr = users)
//    return arr
// }
// getUsers()


// const usersArray = getUsers() 
// console.log(usersArray);



// console.log('start');
// setTimeout( () => console.log('setTimeout'), 0)
// console.log('end');