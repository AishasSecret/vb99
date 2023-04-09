const databaseURL = 'https://energetcsdata-default-rtdb.asia-southeast1.firebasedatabase.app'

const userName = prompt('enter your name');
const password = prompt('enter password')

function createUser() {
    return fetch(`${databaseURL}/users.json`,{
        method: 'POST',
        body: JSON.stringify({
            name: userName,
            password               //same as password: password
        })
    })
    .then(res => res.json())
    .then(json => console.log(json))
}

createUser()



// const newObj = {
//     brand: "Apple"
//     category: "smartphones"
//     description: "An apple mobile which is nothing like apple"
//     discountPercentage: 12.96
//     id: 1
//     images: (5) ['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg', 'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg']
//     price: 549
//     rating: 4.69
//     stock: 94
//     thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
//     title: "iPhone 9"
// }

// function postProducts() {
//     return fetch('https://dummyjson.com/products/1',{
//         method: 'GET'
//     })
//     .then(res => res.json())
//     .then(json => json)

