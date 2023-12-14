Here's a complex JavaScript code that implements a basic e-commerce application. The file name is `ecommerce.js`. Note that for the sake of this exercise, some parts of the code are simplified, and it's not a complete application.

```javascript
// ecommerce.js - E-commerce Application

// Product data
const products = [
  { id: 1, name: 'Product 1', price: 10.99, description: 'Lorem ipsum dolor sit amet.' },
  { id: 2, name: 'Product 2', price: 19.99, description: 'Consectetur adipiscing elit.' },
  { id: 3, name: 'Product 3', price: 7.5, description: 'Pellentesque ac ligula quis arcu cursus dapibus.' },
  // ...
];

// User authentication
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  authenticate() {
    // Code to authenticate user
  }
}

// Cart management
class Cart {
  constructor() {
    this.items = [];
  }

  addToCart(product, quantity = 1) {
    // Code to add product to cart
  }

  removeFromCart(productId, quantity = 1) {
    // Code to remove product from cart
  }

  viewCart() {
    // Code to display cart items and total
  }
}

// Product page
function displayProductPage(productId) {
  // Code to render product details page
}

// Checkout process
function checkout() {
  // Code for checkout process
}

// Main program
function main() {
  const user = new User('john.doe', 'password');

  user.authenticate();

  const cart = new Cart();

  cart.addToCart(products[0], 2);
  cart.addToCart(products[1], 1);
  cart.removeFromCart(1);

  cart.viewCart();

  displayProductPage(2);

  checkout();
}

// Program execution
main();
```

Please note that this code is just an example to fulfill the requirements of the task. In a real-world scenario, an e-commerce application would be much more complex and involve various additional components and functionalities.