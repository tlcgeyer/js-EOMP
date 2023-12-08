//Footer
document.querySelector('#currentYear').textContent =
new Date().getUTCFullYear()

let cart = JSON.parse(localStorage.getItem('cart')) || [];


function addCartToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

let checkOutList = JSON.parse(localStorage.getItem('checkout')) ?
    JSON.parse(localStorage.getItem('checkout')) : [];

let tbody = document.querySelector('tbody');

// Function to update the checkout in localStorage
function updateCheckout() {
    localStorage.setItem("checkout", JSON.stringify(checkOutList));
}

function checkOut() {
    if (cart.length === 0) {
       alert("The cart is empty. Add some manga before checking out");
      return;
    }
    checkOutList = [...cart];
  
 // clearing it after checking out
 cart = [];
 localStorage.removeItem("cart");

 updateCheckout();
 displayCheckOut();
}

    cart.forEach((item) => {
      let totalAmount = item.quantity * item.amount ;
  
      tbody.innerHTML += `
        <tr>
          <td id="names">${item.genre} </td>
          <td id="aboutTable">${item.about}</td>
          <td id="changeIt">${item.quantity}</td>
          <td id="changeIt">R${totalAmount},00</td>
        </tr>
      `;
      
       let cartTotal = cart.reduce((total, item) => total + item.quantity * item.amount, 0   );
        document.querySelector('#cartTotal').textContent = `R${cartTotal},00`;

        
    });

//de clear button
let clearAll = document.querySelector('#clearAll');
clearAll.addEventListener('click', () => {
    localStorage.removeItem('checkout');
    tbody.innerHTML = "Please do add a manga to the checkout out list....";
})


 // alert functon for a success purchase
function completePurchase() {
    alert('Thank you for your purchase from InkWhirlWind!');
}
