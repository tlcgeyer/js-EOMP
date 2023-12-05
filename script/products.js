//Footer
document.querySelector('#currentYear').textContent =
new Date().getUTCFullYear()

//Products
let products = JSON.parse(localStorage.getItem('products') ) ?
JSON.parse(localStorage.getItem('products') ):
localStorage.setItem('products', 
JSON.stringify (
    [
        {
            "id": 1,
            "name": "Jujtsu Kaisen",
            "genre": "Shounen",
            "about": "Gege Akutami's Jujutsu Kaisen is an illustrated Japanese manga series that was first published in the Weekly Shnen Jump magazine in March 2018. It has since been collected and released in various volumes.",
            "amount": "350,00",
            "image": "https://i.postimg.cc/T2ZkRPz4/Jujutsu-Kaisen-manga.jpg"
        },
        {
            "id": 2,
            "name": "Takane to Hana",
            "genre": "Shojo",
            "about": "",
            "amount": "280,00",
            "image": ""
        },
        {
            "id": 3,
            "name": "President is a Maid!",
            "genre": "Josei",
            "about": "",
            "amount": "280,00",
            "image": ""
        },
        {
            "id": 4,
            "name": "Berserk",
            "genre": "Seinen",
            "about": "",
            "amount": "350,00",
            "image": ""
        },
        {
            "id": 5,
            "name": "The way of a Household Husband",
            "genre": "Slice of Life",
            "about": "https://i.postimg.cc/KYf4Msfw/20-the-way-of-the-househusband-manga-cover.jpg",
            "amount": "350,00",
            "image": ""
        },
        {
            "id": 6,
            "name": "A Gatherer's Adventure in Isekai",
            "genre": "Isekai",
            "about": "https://i.postimg.cc/s2rZSWrQ/81-By-Oky-OOL-SL1500.jpg",
            "amount": "280,00",
            "image": ""
        },
        {
            "id": 7,
            "name": "Gundam",
            "genre": "Mecha",
            "about": "",
            "amount": "300,00",
            "image": "https://i.postimg.cc/yNG4tm8W/288be270bd271e8b8c57172a3192fc65.jpg"
        },
        {
            "id": 8,
            "name": "Doraemon",
            "genre": "Kodomo(for kids)",
            "about": "",
            "amount": "200,00",
            "image": "https://i.postimg.cc/VvQ6QQkS/images.jpg"
        },
        {
            "id": 9,
            "name": "One Punch Man",
            "genre": "Shounen",
            "about": "",
            "amount": "350,00",
            "image": ""
        },
        {
            "id": 10,
            "name": "Fruits Basket",
            "genre": "Shojo",
            "about": "",
            "amount": "280,00",
            "image": " "
        },
        {
            "id": 11,
            "name": "Nana",
            "genre": "Josei",
            "about": "",
            "amount": "350,00",
            "image": ""
        },
        {
            "id": 12,
            "name":"Goblin Slayer",
            "genre": "Seinen",
            "about": "",
            "amount": "350,00",
            "image": ""
        },
        {
            "id": 13,
            "name": "Nichijou",
            "genre": "Slice of Life",
            "about": "",
            "amount": "280,00",
            "image": ""
        },
        {
            "id": 14,
            "name": "The Beginning After the End",
            "genre": "Isekai",
            "about": "",
            "amount": "280,00",
            "image": ""
        },
        {
            "id": 15,
            "name": "Neon Genesis Evangelion",
            "genre": "Mecha",
            "about": "",
            "amount": "350,00",
            "image": ""
        },
        {
            "id": 16,
            "name": "Astro Boy",
            "genre": "Kodomo",
            "about": "",
            "amount": "200,00",
            "image": ""
        },
    ]
)
)

let productsWrapper = document.querySelector(
    '#productWrapper')
let searchProduct = document.querySelector(
    '[data-products]')
let sortProduct = document.querySelector(
    '[data-products]')
    function displayProducts() {
        productsWrapper.innerHTML = ""

        if(products) {
            //looping through the products in an array
            products.forEach( product =>{
                productsWrapper.innerHTML += `<div class="card">
                    <img src="${product.image}"
                    class="card-img-top" alt="${product.id}"></img>
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.genre}</p>
                        <div class="card-footer">R${product.amount}</div>

                        <button href= "cart-shopping" class="btn-btn-warning">Cart</button> 
                    </div>

                </div>`
            })
        }else {
            productsWrapper.innerHTML = "No products"
        }


    }
    displayProducts()

