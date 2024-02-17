function addToCart() {
    var price = document.getElementById("price").innerText;
    var productName = document.getElementById("desc").innerText;

    // Get the current cart from localStorage or initialize an empty array
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Create a new product object with the product name and price
    var product = {
        name: productName,
        price: price
    };

    // Add the product to the cart array
    cart.push(product);

    // Store the updated cart back in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Provide feedback to the user
    window.alert('Product added to cart!');
}
function addProductToCart(productId) {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
    const productId = button.getAttribute('data-product-id');
    addProductToCart(productId);
  });
});
    // Fetch the product data from the server or an API endpoint
    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(product => {
        // Add the product to the cart container
        const cartContainer = document.getElementById('cart-items-container');
        const cartItem = createCartItem(product);
        cartContainer.appendChild(cartItem);
      });
      window.alert("Product added to cart!");
  }
  function createCartItem(product) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
  
    const productName = document.createElement('h1');
    productName.textContent = product.name;
    cartItem.appendChild(productName);
  
    const productPrice = document.createElement('h2');
    productPrice.textContent = `₱${product.price.toLocaleString()}`;
    cartItem.appendChild(productPrice);
  
    const productImage = document.createElement('img');
    productImage.src = product.image_url;
    cartItem.appendChild(productImage);
  
    // Add more product details if needed
  
    return cartItem;

  }


function openForm(evt, formName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
}

function login(event) {
    event.preventDefault();
    // Perform login functionality here
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    console.log('Login:', username, password);
}

function signup(event) {
    event.preventDefault();
    // Perform signup functionality here
    var username = document.getElementById('signup-username').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    console.log('Sign Up:', username, email, password);
}







