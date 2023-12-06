//Footer date
document.querySelector('#currentYear').textContent =    
new Date().getUTCFullYear()


//List of products/items(manga) being loaded into the cart
let cartSize = JSON.parse(localStorage.getItem('checkout'))?.length || 0
// products
let products = JSON.parse(localStorage.getItem('products'))
// Input element, search laptop by make
let searchByMake = document.querySelector('#searchByGenre');
// Sorting by price
let sortingByPrice = document.querySelector('#sortByPrice');
// Products wrapper
let productCard = document.querySelector('[data-product-card]');
// CheckOutList
let CheckOutList = [];
// Display data to the index.html

function displayProducts(arg) {
    try {
        // Clear 
        productCard.innerHTML = "";
        // Display
        if (arg) {
            arg?.forEach((item) => {
                productCard.innerHTML += `
                <div class="card">
                    <div class="card-header">
                        <h3>${item.genre} ${item.about.split(' ')[0].slice(0, item.spec.indexOf(' '))}</h3> 
                    </div>

                    <div class="card-body">
                        <img class="img-fluid" src="${item.image}" loading="lazy"/>
                        <div>                    
                            <span>About: 
                                <li>${item.about}</li>
                            </span>
                        </div>

                        <button class="btn btn-success text-dark" onclick='checkoutProducts(${JSON.stringify(item)})'>Add to cart</button>
                    </div>
                    <div class="card-footer d-flex justify-content-center align-items-center">
                        <p class="product-amount">Price: R${item.amount}</p>
                    </div>
                </div>
                `
            })
        } else {
            args = JSON.parse(localStorage.getItem("products"))
            productCard.innerHTML =
                
            //Making use of a spinner to show that the list of items are being loaded 
            `
            <div class="justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            `
            displayProducts(args)
        }
    } catch (e) {
        console.error(`Error message: ${e.message}`);
    }
};
displayProducts(products);

//Products
// let products = JSON.parse(localStorage.getItem('products') ) ?
// JSON.parse(localStorage.getItem('products') ):
// localStorage.setItem('products', 
// JSON.stringify (
//     [
        {
            "id": 1,
            "name": "Jujtsu Kaisen",
            "genre": "Shounen",
            "about": "Gege Akutami's Jujutsu Kaisen is an illustrated Japanese manga series that was first published in the Weekly Shonen Jump magazine in March 2018. It has since been collected and released in various volumes.",
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

