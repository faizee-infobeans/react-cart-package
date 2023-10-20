# react-cart-package

`react-cart-package` is a simple and customizable shopping cart package for React applications. It allows you to add, remove, and manage items in a shopping cart easily.

## Installation

In your application `package.json` file, add the following line in the dependencies:

```bash
"dependencies": {
   "react-cart-package": "git+https://github.com/faizee-infobeans/react-cart-package.git"
}
```
After that run:

```bash
npm install
# or
npm i
```
## Usages

Import and use the Context component to wrap your application:

```bash
import React from 'react';
import { CartProvider } from 'react-cart-package';

function App() {
  return (
    <CartProvider>
      {/* Your application components */}
    </CartProvider>
  );
}
```
Use the CartState to interact with the shopping cart in your components:
```bash
import { CartState } from "react-cart-package";

const ProductItem = ({ prod }) => {
  const { state, updateState } = CartState();

  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {prod.price}</span>
      </div>
        <button className="add" 
          onClick={() => {
            const newCart = [...state.cart, prod];
            updateState({ cart: newCart });
          }} 
        >
          Add to Cart
        </button>
    </div>
  );
};

export default ProductItem;
```
Access cart Data to display all the details in cart Component:
```bash
import { CartState } from "react-cart-package";
import React, { useEffect } from "react";

import { calculateTotal } from "./calc";

const Cart = () => {
  const { state, updateState } = CartState();

  useEffect(() => {
    const totalPrice = calculateTotal(state.cart);
    updateState({ total: totalPrice.toString() });
  }, [state.cart]);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: {state.total}</span>
      <div className="productContainer">
        {state.cart.map((item) => (
          <li>
            {item.name} - ${item.price}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Cart;
```

## License
This package is licensed under the MIT License.
