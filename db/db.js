const link = document.getElementById ('link')
const name = document.getElementById ('name')
const dis = document.getElementById ('dis')
const price = document.getElementById ('price')
const but = document.getElementById ('but')

const db_url = 'https://energetcsdata-default-rtdb.asia-southeast1.firebasedatabase.app'

but.onclick = () => {
    const data = {
        link: link.value,
        name: name.value,
        dis: dis.value,
        price: price.value,
    }

    link.value = ''
    name.value = ''
    dis.value = ''
    price.value = ''


    return fetch(`${db_url}/energy.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .catch(error => {
        console.log(error);
    });
    
}