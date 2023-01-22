const str1 = 'Hello,'
const str2 = 'world'
console.log(str1, str2);

const a = 10
const b = 2
const c = 5
console.log(a+b+c);

const d = 17
const e = 10
const f = d-e
const g = 7
const result = f + g
console.log(result);

const h = 'I learn javascript!'
console.log(h.replaceAll(' ', '_'));

const i = 'I learn javascript!'
console.log(i.length);

const arr = ['a']
arr.push('y', 't', 'r', 'e', 'w', 'q')
console.log(arr.reverse());
arr.push('y', 't', 'r', 'e', 'w', 'q')
console.log(arr);

const j = prompt('Введите имя и возраст через запятую')
const arrj = j.split(',') [0]
const arrj2 = j.split(', ') [1]
console.log(`Hello, ${arrj}. You are ${arrj2}`);