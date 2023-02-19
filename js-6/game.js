const divUserName = document.querySelector('.userName');
const divGameCount = document.querySelector('.gameCount');
const divGame = document.querySelector('.game');

const inpCount = document.getElementById('count')
const inpName = document.getElementById('name')
const toGame = document.getElementById('toGame')
const toCount = document.getElementById('toCount')

const imgStone = document.getElementById('stone')
const imgPaper = document.getElementById('paper')
const imgScissors = document.getElementById('scissors')

const gamesAll = document.getElementById('gameAll')
const userWin = document.getElementById('userWin')
const pcWin = document.getElementById('pcWin')

const divMidRes = document.querySelector('.middleResult');
const spanMidRes = document.querySelector('#middleResult');

const divRes = document.getElementsByClassName('result')
const spanRes = document.getElementById('result')

let gamesCount = 1

toCount.setAttribute('disabled',true)
divGame.style.display = 'none'
divGameCount.style.display = 'none'
divRes.style.display = 'none'

const showCount = () => {
   divUserName.style.display = 'none'
   divGameCount.style.display = 'block'
   inpName.removeEventListener('input', disableName)
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

toGame.onclick = () => {
   divGameCount.style.display = 'none'
   divGame.style.display = 'block'
   gamesCount = inpCount.value;
}

const arrChoose = ['rock', 'paper', 'scissors']

let countGames = 0
let pcCounterWin = 0
let userCounterWin = 0

const gameCounter = (winner, user, pc) => {
   switch (winner) {
      case 'user':
         userCounterWin++
         break;
      case 'pc':
         pcCounterWin++
         break;
   }
   countGames++
   gamesAll.innerHTML = countGames
   userWin.innerHTML = userCounterWin
   pcWin.innerHTML = pcCounterWin
   spanMidRes.innerHTML = `PC chose ${pc}, you chose ${user}`
   divMidRes.style.display = 'block'

   setTimeout(() => {
      divMidRes.style.display = 'none'
   }, 3000)

   if (countGames === +gamesCount) {
      if (userCounterWin > pcCounterWin) {
         spanMidRes.innerHTML = `You win`
      } else if (userCounterWin < pcCounterWin) {
         spanMidRes.innerHTML = `You lose`
      } else {
         spanMidRes.innerHTML = `Draw`
      }
      divMidRes.style.display = 'block'
      imgPaper.style.display = 'none'
      imgStone.style.display = 'none'
      imgScissors.style.display = 'none'
   }
}

imgStone.onclick = () => {
   const user = 'stone'
   const pc = arrChoose[Math.floor(Math.random() * 3)]
   switch (pc) {
      case 'stone':
         gameCounter(null, user, pc)
         break;
      case 'paper':
         gameCounter('user', user, pc)
         break;
      case 'scissors':
         gameCounter('pc', user, pc)    //победил, наш ход (stone), комп
         break;
   }
}

imgPaper.onclick = () => {
   const user = 'paper'
   const pc = arrChoose[Math.floor(Math.random() * 3)]
   switch (pc) {
      case 'stone':
         gameCounter('user', user, pc)
         break;
      case 'paper':
         gameCounter(null, user, pc)
         break;
      case 'scissors':
         gameCounter('pc', user, pc)
         break;
   }
}

imgScissors.onclick = () => {
   const user = 'scissors'
   const pc = arrChoose[Math.floor(Math.random() * 3)]
   switch (pc) {
      case 'stone':
         gameCounter('pc', user, pc)
         break;
      case 'paper':
         gameCounter('user', user, pc)
         break;
      case 'scissors':
         gameCounter(null, user, pc)
         break;
   }
}