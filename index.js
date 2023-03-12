const wrapper = document.querySelector('.wrapper');

// const p = document.createElement('p');
// const span = document.createElement('span');

// p.innerHTML = 'I am p before div';
// span.innerHTML = 'I am span after div';

// wrapper.prepend(p);
// wrapper.append(span);



// const card = document.querySelector('.card');
// const title = document.getElementById('title');
// const description = document.getElementById('description');
// const img = document.getElementById('img');
// const price = document.getElementById('price');
// const discount = document.getElementById('discount');
// const rating = document.getElementById('rating');
// const stock = document.getElementById('stock');
// const brand = document.getElementById('brand');
// const category = document.getElementById('category');

const btn = document.getElementById('addProd')

const products = [
   {
   "id": 26,
   "title": "Plant Hanger For Home",
   "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
   "price": 41,
   "discountPercentage": 17.86,
   "rating": 4.08,
   "stock": 131,
   "brand": "Boho Decor",
   "category": "home-decoration",
   "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
   "images": [
   "https://i.dummyjson.com/data/products/26/1.jpg",
   "https://i.dummyjson.com/data/products/26/2.jpg",
   "https://i.dummyjson.com/data/products/26/3.jpg",
   "https://i.dummyjson.com/data/products/26/4.jpg",
   "https://i.dummyjson.com/data/products/26/5.jpg",
   "https://i.dummyjson.com/data/products/26/thumbnail.jpg"
   ]
   },
   {
   "id": 27,
   "title": "Flying Wooden Bird",
   "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
   "price": 51,
   "discountPercentage": 15.58,
   "rating": 4.41,
   "stock": 17,
   "brand": "Flying Wooden",
   "category": "home-decoration",
   "thumbnail": "https://i.dummyjson.com/data/products/27/thumbnail.webp",
   "images": [
   "https://i.dummyjson.com/data/products/27/1.jpg",
   "https://i.dummyjson.com/data/products/27/2.jpg",
   "https://i.dummyjson.com/data/products/27/3.jpg",
   "https://i.dummyjson.com/data/products/27/4.jpg",
   "https://i.dummyjson.com/data/products/27/thumbnail.webp"
   ]
   },
   {
   "id": 28,
   "title": "3D Embellishment Art Lamp",
   "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
   "price": 20,
   "discountPercentage": 16.49,
   "rating": 4.82,
   "stock": 54,
   "brand": "LED Lights",
   "category": "home-decoration",
   "thumbnail": "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
   "images": [
   "https://i.dummyjson.com/data/products/28/1.jpg",
   "https://i.dummyjson.com/data/products/28/2.jpg",
   "https://i.dummyjson.com/data/products/28/3.png",
   "https://i.dummyjson.com/data/products/28/4.jpg",
   "https://i.dummyjson.com/data/products/28/thumbnail.jpg"
   ]
   },
   {
   "id": 29,
   "title": "Handcraft Chinese style",
   "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
   "price": 60,
   "discountPercentage": 15.34,
   "rating": 4.44,
   "stock": 7,
   "brand": "luxury palace",
   "category": "home-decoration",
   "thumbnail": "https://i.dummyjson.com/data/products/29/thumbnail.webp",
   "images": [
   "https://i.dummyjson.com/data/products/29/1.jpg",
   "https://i.dummyjson.com/data/products/29/2.jpg",
   "https://i.dummyjson.com/data/products/29/3.webp",
   "https://i.dummyjson.com/data/products/29/4.webp",
   "https://i.dummyjson.com/data/products/29/thumbnail.webp"
   ]
   },
   {
   "id": 30,
   "title": "Key Holder",
   "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
   "price": 30,
   "discountPercentage": 2.92,
   "rating": 4.92,
   "stock": 54,
   "brand": "Golden",
   "category": "home-decoration",
   "thumbnail": "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
   "images": [
   "https://i.dummyjson.com/data/products/30/1.jpg",
   "https://i.dummyjson.com/data/products/30/2.jpg",
   "https://i.dummyjson.com/data/products/30/3.jpg",
   "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
   ]
   }
]

btn.onclick = () => {
   for (let i = 0; i < products.length; i++) {
      const card = document.createElement('div');
      card.classList.add('card');                                    //создали блок и добавили класс 

      const title = document.createElement('h1');
      const description = document.createElement('p');
      const thumbnail = document.createElement('img');
      const price = document.createElement('p');
      const discount = document.createElement('p');
      const rating = document.createElement('p');
      const stock = document.createElement('p');
      const brand = document.createElement('p');
      const category = document.createElement('p');

      title.innerHTML = products[i].title
      description.innerHTML = products[i].description
      thumbnail.src = products[i].thumbnail
      thumbnail.alt = products[i].title
      price.innerHTML = `price: ${products[i].price}$`
      discount.innerHTML = `discount: ${products[i].discountPercentage}%`
      rating.innerHTML = `rating: ${products[i].rating}`
      stock.innerHTML = `stock: ${products[i].stock}`
      brand.innerHTML = `brand: "${products[i].brand}"`
      category.innerHTML = `categoty: "${products[i].category}"`

      card.append(
         title,
         description,
         thumbnail,
         price,
         discount,
         rating,
         stock,
         brand,
         category)
      wrapper.append(card)
   }
}