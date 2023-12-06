//Footer
document.querySelector('#currentYear').textContent =
new Date().getUTCFullYear()

 let cart = JSON.parse(localStorage.getItem('cart')) || [];

 // Display selected manga items in the checkout table
 function displayCheckout() {
     let deBody = document.getElementById('deBody');
     deBody.innerHTML = "";

     if (cart.length > 0) {
         cart.forEach((item) => {
             deBody.innerHTML += `
                 <tr>
                     <td>${item.name}</td>
                     <td>${item.quantity}</td>
                     <td>R${item.amount * item.quantity}</td>
                 </tr>`;
         });
     } else {
         deBody.innerHTML = "<tr><td col-span='3'>No items in the cart</td></tr>";
     }
 }

 // Function to complete the purchase
 function completePurchase() {
     // Add any additional logic for completing the purchase
     alert('Thank you for your purchase from InkWhirld!');
 }

 // Add products with IDs 1, 4, and 9 to the cart
 function addProductsToCart() {
     // IDs of products to be added to the cart
     let productIdsToAdd = [1, 4, 9];

     // Reference to the manga data (modify as needed)
     let mangaData = [
        function displayProducts(mangaData) {
            mangaTable.innerHTML = "";
            //Looping through the array
            if (mangaData) {
                mangaData.forEach( (item) => {
                    mangaTable.innerHTML += `
                 <div class="col-md-4 mb-4">
                    <div class="card bg-black text-light">
                       <img src="${item.image}" class="card-img-top" id="mangaPic" alt="${item.name}">
                       <div class="card-body">
                          <h5 class="card-title" id="names">${item.name}</h5>
                          <p class="card-text">${item.about}</p>
                          <p class="card-text" id="names">${item.genre}</p>
                          <p class="card-text">R${item.amount}</p>
                       </div>
                       <button class="btn btn-primary" id="btn">Add to Cart</button>
                    </div>
                 </div>
                 
              `;
            });
        }
 }];

     // Loop through the manga data and add selected products to the cart
     mangaData.forEach((item) => {
         if (productIdsToAdd.includes(item.id)) {
             // Check if the product already exists in the cart
             const existingCartItem = cart.find(cartItem => cartItem.id === item.id);

             if (existingCartItem) {
                 // Update quantity if product already exists
                 existingCartItem.quantity += 1;
             } else {
                 // Add new item to the cart
                 cart.push({
                     id: item.id,
                     name: item.name,
                     amount: item.amount,
                     quantity: 1
                 });
             }
         }
     });

     updateCartLocalStorage();


     displayCheckout();
 }

 addProductsToCart();