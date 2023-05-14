const btn = document.getElementById('btn-prim')
const cardDiv = document.querySelector('.box') 
function cardF () {
    const lsArr = JSON.parse(localStorage.getItem('card'))
    console.log(lsArr);


    for (let i = 0; i < lsArr.length; i++) {
        const card = document.createElement('div')
        card.classList.add('card')

        const pic = document.createElement('div')
        pic.classList.add('pic')

        const card_body = document.createElement('div')
        card_body.classList.add('card-body')

        const card_title = document.createElement('h5')
        card_title.classList.add('card-title')
        card_title.innerText = lsArr[i].name

        const card_text = document.createElement('p')
        card_text.classList.add('card-text')
        card_text.innerText = lsArr[i].dis

      



        pic.style.backgroundImage = `url('${lsArr[i].link}')`
        pic.style.backgroundPosition = 'center'
        pic.style.backgroundRepeat = 'no-repeat'
        pic.style.backgroundSize = 'cover'

        card_body.append(card_title, card_text)


        card.append(pic, card_body)
        cardDiv.append(card)


    }


}

cardF()

btn.onclick = () => {
    localStorage.clear()
    cardF()
}