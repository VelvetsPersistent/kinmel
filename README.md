Ecommerce Website Frontend - Project Documentation
========================================

Project: Ecommerce Website (Frontend)
Tech Stack: React.js, TailwindCSS
Author: Smita Parajuli
Date: [Update with your deployment date]
Version: MVP v1

----------------------------------------
OVERVIEW
----------------------------------------

This Ecommerce Website is a modern eCommerce frontend project built with React and styled using TailwindCSS. 
It features an interactive product listing, cart management, wishlist, and order summary modal with 
smooth user experience.

**Hosted URLs:** [Link to KinMel](https://kenmel.netlify.app/)

This documentation covers:

- Folder structure
- Component responsibilities
- State management
- Cart/wishlist logic
- Styling
- Future improvements

----------------------------------------
FOLDER STRUCTURE
----------------------------------------
```
src/
├── App.jsx                 --> Root component
├── main.jsx                --> React DOM entry
├── index.css               --> Tailwind and custom global styles
├── Components/
│   ├── Home/              --> Main page logic
│   │   └── Home.jsx
│   ├── Navbar/            --> Top navigation
│   │   └── Navbar.jsx
│   ├── Banner/            --> Hero section
│   │   └── Banner.jsx
│   ├── products/          --> Product grid/cards
│   │   └── products.jsx
│   ├── Cart/              --> Slide-in cart panel
│   │   └── Cart.jsx
│   ├── WishList/          --> Wishlist panel
│   │   └── Wishlist.jsx
│   ├── OrderSummary/      --> Order confirmation modal
│   │   └── OrderSummary.jsx
│   ├── OrderPlace/        --> Success modal
│       └── OrderPlace.jsx
```
----------------------------------------
COMPONENT RESPONSIBILITIES
----------------------------------------

Home.jsx
- Master controller of app state
- Handles cart, wishlist, order summary, modals
- Passes props to all children
- Centralized event handlers

Navbar.jsx
- Sticky navigation with scroll effect
- Accepts search input
- Shows cart/wishlist counts

Banner.jsx
- Static hero/banner content

products.jsx
- Displays product grid
- Allows search filter
- Triggers cart and wishlist actions

Cart.jsx
- Slide-in UI
- Handles:
  - Quantity change
  - Subtotal/total calculation
  - Proceed to order

Wishlist.jsx
- Manages wishlisted items with "added date"
- Toggle add/remove functionality

OrderSummary.jsx
- Modal to confirm order with totals
- Buttons: Cancel, Place Order

OrderPlace.jsx
- Simple modal for order confirmation

----------------------------------------
STATE MANAGEMENT (useState)
----------------------------------------

cart                 --> Products added to cart
wishlist             --> Saved products
searchTerm           --> Product filter from search
isScrolled           --> Navbar style toggle
activePanel          --> Controls open tab/panel
showOrderSummary     --> Boolean for order modal
OrderPlaced          --> Boolean for final confirmation

----------------------------------------
CART & ORDER CALCULATIONS
----------------------------------------

Subtotal      = sum(product.price * product.quantity)
Shipping Fee  = total quantity * 2
Order Total   = Subtotal + Shipping Fee

Code:

const Subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
const shippingFee = totalItems * 2;
const orderTotal = Subtotal + shippingFee;

----------------------------------------
STYLING (TailwindCSS)
----------------------------------------

Tailwind is used throughout the app.
To hide scrollbars:

index.css:

.scroll::-webkit-scrollbar {
    display: none;
}

----------------------------------------
USAGE INSTRUCTIONS
----------------------------------------

1. Install packages
   npm install

2. Run dev server
   npm run dev

3. Open in browser
   http://localhost:5173/

----------------------------------------
FUTURE ENHANCEMENTS
----------------------------------------

- Connect to GraphQL backend (Apollo/urql)
- Add login and user role management
- Add toast notifications (like react-hot-toast)
- Responsive QA on mobile/tablet
- Persist cart/wishlist to localStorage
- Order history panel for users

----------------------------------------
BACKEND INTEGRATION (PLANNED)
----------------------------------------

You will need GraphQL APIs for:

- Products: fetch all / by search
- Cart: add/remove/update
- Wishlist: toggle
- Orders: place, fetch history

Apollo Client can be configured once backend is ready.

----------------------------------------
CREDITS & LICENSE
----------------------------------------

Built by: Smita Parajuli 
For educational, showcase, and MVP purposes.  

