
// Function to fetch products from the API
async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:3000/contact/api');
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Function to display products on the HTML page with buttons
function displayProducts(products) {
  const productList = document.getElementById('card-container');

  products.forEach(product => {


    var cardDiv = document.createElement('div');
    cardDiv.className = 'card';


    var imgElement = document.createElement('img');
    imgElement.src = product.productImage;

    var h1Element = document.createElement('h1');
    h1Element.innerHTML = product.productName;

    var pElement = document.createElement('p');
    pElement.innerHTML = product.productDescription;

    // Create a button for each product
    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.addEventListener('click', () => addToCart(`${product.productName} - $${product.productPrice}`));

    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(h1Element);
    cardDiv.appendChild(pElement);
    cardDiv.appendChild(addButton);
    productList.appendChild(cardDiv);


  });
}


function addToCart(name, price) {
  const cartItem = { name, price };

  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.push(cartItem);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  alert("product added to cart");
}
// Fetch products when the page loads
fetchProducts();