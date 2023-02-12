const divUserName = document.querySelector('.userName');
const divGameCount = document.querySelector('.gameCount');
const divGame = document.querySelector('.game');

const inpCount = document.getElementById('count')
const inpName = document.getElementById('name')
const toGame = document.getElementById('toGame')
const toCount = document.getElementById('toCount')

const imgRock = document.getElementById('rock')
const imgPaper = document.getElementById('paper')
const imgScissors = document.getElementById('scissors')
toCount.setAttribute('disabled',true)
divGame.style.display = 'none'
divGameCount.style.display = 'none'

const showCount = () => {
   divUserName.style.display = 'none'
   divGameCount.style.display = 'block'
   inpCount.removeEventListene('input', disableName)
}

const disableName = () => {
   if (inpName.value.length < 2) {
      toCount.setAttribute('disabled', true)
   } else {
      toCount.removeAttribute('disabled')
   }
}
toCount.onclick = () => {
   showCount()
}

inpName.addEventListener('input', disableName)