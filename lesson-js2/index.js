// const a = 'sOmE RaNdOm'

// console.log(a.toLowerCase());
// console.log(a.toUpperCase());
// console.log(a.toLocaleUpperCase()); //почти одно и то же,что toUpperCase
// console.log(a.toLocaleLowerCase());
// console.log(a.repeat(3));
// console.log(a.includes('require'));
// console.log(a.includes('sOm'));
// console.log(a.toLowerCase().includes('some'));

// const b = "fakt"

// console.log(a.concat(b, 4275, 'ighfq'));
// console.log(b.endsWith('evgeniy'));
// console.log(b.startsWith('fak'));
// console.log(a.replace('s', 'R'));
// console.log(a.replaceAll(' ', '@'));
// console.log(a.charAt(10));
// console.log(a.charAt(0));
// console.log(a.indexOf('dOm'));
// console.log(a.indexOf('D'));
// console.log(a.lastIndexOf('m'));
// console.log(a.slice(3));
// console.log(a.slice(2, 8));
// console.log(a.substr(4));
// console.log(a.substr(1, 6));

// const c = prompt('imya tvoyey mami', 'evgeniy')
// console.log(c.toUpperCase());

const d = [4, 'massive', null, {a:5}, [0,1,2,57]]
console.log(d[3]);
console.log(d[4][3]);

const e = [13, 31, 3859, 2, 5, 35]
const f = [1, 54, 5247]
console.log(e.concat(f, 14, 68, 498));

const g = 'offensive person'
const arr_g = g.split('per');

const h = [2154, 35, 1234, 98]
const arrh = h.join(' (@_@) ')
console.log(arrh);

const i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(i.reverse());
console.log(i.includes(65));
console.log(i.includes(7));

i.push(10, 11, 12, 13)
console.log(i);
i.pop()
console.log(i);

const pop = i.pop()
console.log(i);
console.log(pop);

i.unshift(3, 4, 5)
console.log(i);

const shift = i.shift()
console.log(i);
console.log(shift);

const j = [124, 125, 56, 78, 4, 8, 567, 13756, 1000-7]
console.log(j.sort());
console.log(j.sort((a,b) => a - b));
console.log(j.sort((a,b) => b - a));

const k = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(k.slice(4, 7)); // не вырезает из массива
console.log(k.splice(4, 5)); //вырезает из массива, т.е. остается 0, 1, 2, 3, 9
console.log(k.splice(4, 5, 40, 50, 60)); // вставляет в массив после 8 40, 50, 60
console.log(k);

// const mName = prompt()
// console.log(mName);
// const arrName = mName.split('')
// console.log(mName);
// arrName[0] = arrName[0].toLowerCase()
// arrName[1] = arrName[1].toUpperCase()
// console.log(arrName)