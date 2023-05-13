const db_url = 'https://energetcsdata-default-rtdb.asia-southeast1.firebasedatabase.app'
const cards = document.querySelector('.cards')


function getSmthing() {
    fetch(`${db_url}/energy.json`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then( response => response.json())
    .then( result => {
        const energy = Object.keys(result).map(key => result[key])
        console.log(energy);


        for (let i = 0; i < energy.length; i++) {
            const card = document.createElement('div')
            card.classList.add('card')

            const pic = document.createElement('div')
            pic.classList.add('pic')

            const card_body = document.createElement('div')
            card_body.classList.add('card-body')

            const card_title = document.createElement('h5')
            card_title.classList.add('card-title')
            card_title.innerText = energy[i].name

            const card_text = document.createElement('p')
            card_text.classList.add('card-text')
            card_text.innerText = energy[i].dis

            const btn_prim = document.createElement('a')
            btn_prim.innerText = 'to card'
            btn_prim.setAttribute('id', 'btn-prim')
            btn_prim.classList.add('btn-primary')
            btn_prim.classList.add('btn')

            pic.style.backgroundImage = `url('${energy[i].link}')`
            pic.style.backgroundPosition = 'center'
            pic.style.backgroundRepeat = 'no-repeat'
            pic.style.backgroundSize = 'cover'

            card_body.append(card_title, card_text, btn_prim)


            card.append(pic, card_body)
            cards.append(card)


        }


    })

    .catch(error => {
        console.log(error);
    })
}
getSmthing()


