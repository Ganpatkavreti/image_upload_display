document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");

  // Retrieve cart data from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Display selected products in the cart
  cart.forEach(product => {
    console.log(product);
    const cartDiv = document.createElement("div");
    cartDiv.innerHTML = `<p>${product.name}</p>`;

    const addButton = document.createElement('button');
    addButton.textContent = 'remove to Cart';
    addButton.addEventListener('click', () => delProduct(product.name));
    cartDiv.appendChild(addButton);

    cartItemsContainer.appendChild(cartDiv);

      
  });

});



function delProduct(name){
    // Get cart items from local storage
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Remove the item with the specified id
    cartItems = cartItems.filter(product => product.name !== name);

    // Update local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Refresh the cart page
    location.reload();


}
