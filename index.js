window.onload = load;
let storage = window.localStorage;
info.value = storage.getItem('message');

info.oninput = () => {
   storage.setItem('message', info.value);
}

function load() {
   let btn = document.getElementById('btn');
   let info = document.getElementById('info');

   btn.addEventListener('click', clear);
}

function clear() {
   storage.removeItem('message');
   info.value = '';
}