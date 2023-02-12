const btn1 = document.getElementById('btn1')
console.log(btn1);

const btn2_1 = document.querySelector('btn2')  //или тег, или класс(.класс), или айди(#id)
const btn2_2 = document.querySelector('.btn2')
const btn2_3 = document.querySelector('#btn2')
// console.log(btn2_1);
// console.log(btn2_2);
// console.log(btn2_3);


const li = document.querySelectorAll('li')
console.log(li);

// for(let elem of li) {
//    // console.log(elem);
//    console.log(elem.matches('li[value="6"]'));
// }


// const chapter = document.querySelector('.chapter');
// console.log(chapter.closest('.book'));
// console.log(chapter.closest('.contents'));
// console.log(chapter.closest('h1'));


const inpWrite = document.querySelector('#writing');
const p = document.querySelector('#p')

const inputFunc = () => {
   console.log(inpWrite.value)
   p.innerHTML = inpWrite.value
}
inpWrite.addEventListener('input', inputFunc)


inpWrite.addEventListener('input', inputFunc)
const remove = document.querySelector('#btn-rem')

remove.onclick = () => {
   alert('remove listener from input')
   inpWrite.removeEventListener('input', inputFunc)
}