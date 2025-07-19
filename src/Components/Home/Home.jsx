import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Product from '../products/products';
import Cart from '../Cart/Cart';
import Wishlist from '../WishList/Wishlist';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderPlace from '../OrderPlace/OrderPlace'; // Import fixed
import Footer from '../Footer/Footer';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(''); // for NavBar
  const [isScrolled, setIsScrolled] = useState(false); // for NavBar
  const [activePanel, setActivePanel] = useState(null);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  // const [OrderSummary, setOrderSummary] = useState(false);
  const [OrderPlaced, setOrderPlaced] = useState(false);
  const [cart, setCart] = useState([]); // for NavBar
  const [wishlist, setWishList] = useState([]); // for NavBar

  // Total Calculations
  const Subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0); // for NavBar
  const shippingFee = totalItems * 2;
  const orderTotal = Subtotal + shippingFee;

  useEffect(() => {
    const changeNavbar = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', changeNavbar);
    return () => window.removeEventListener('scroll', changeNavbar); // Clean up
  }, []);

  const handleScroll = () => {
    const section = document.getElementById('product-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePanel = (tabName) => {
    setActivePanel((prev) => (prev === tabName ? null : tabName));
  };

  const handleclose = () => setActivePanel(null);

  const removeItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const quantityIncrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const quantityDecrement = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const addToCart = (product) => {
    const alreadyAdded = cart.find((item) => item.id === product.id);
    if (alreadyAdded) {
      alert('Item is already in the cart');
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const addToWishList = (product) => {
    const isInwishlist = wishlist.some((item) => item.id === product.id);
    if (isInwishlist) {
      setWishList(wishlist.filter((item) => item.id !== product.id));
    } else {
      const addedDate = new Date().toLocaleDateString('en-GB');
      setWishList([...wishlist, { ...product, addedDate }]);
    }
  };

  return (
    <div>
    {/* for testing */}
    {/* <h1>Hello Home</h1> */}
      {/* Navbar */}
      
      <Navbar
        handleScroll={handleScroll}
        setSearchTerm={setSearchTerm}
        isScrolled={isScrolled}
        handlePanel={handlePanel}
        totalItems={totalItems}
        Wishlist={wishlist}
      />

      {/* Banner */}
      <Banner />

      {/* Product List */}
      <Product
        searchTerm={searchTerm}
        addToCart={addToCart}
        addToWishList={addToWishList}
        wishlist={wishlist}
      />

      {/* Cart Tab */}
      <Cart
        activePanel={activePanel}
        handleclose={handleclose}
        cart={cart}
        removeItem={removeItem}
        quantityIncrement={quantityIncrement}
        quantityDecrement={quantityDecrement}
        subtotal={Subtotal}
        shippingFee={shippingFee}
        orderTotal={orderTotal}
        setOrderSummary={setShowOrderSummary}
      />

      {/* Wishlist Tab */}
      <Wishlist
        activePanel={activePanel}
        handleclose={handleclose}
        wishlist={wishlist}
      />

      {/* Order Summary Modal */}
      {showOrderSummary && (
        <showOrderSummary
          cart={cart}
          Subtotal={Subtotal}
          shippingFee={shippingFee}
          orderTotal={orderTotal}
          setOrderSummary={setShowOrderSummary}
          setOrderPlaced={setOrderPlaced}
          setCart={setCart}
        />
      )}

      {/* Order Placed Modal */}
      {OrderPlaced && <OrderPlaced setOrderPlaced={setOrderPlaced} />}

      {/* Footer */}
      <Footer />

      {/* Test layout */}
      {/* <div className="pt-[14vh] text-center text-2xl">Home Page Content</div> */}
    </div>
  );
};

export default Home;


// // test code
// const Home = () => {
//   return <h1>✅ Home Loaded</h1>;
// };

// export default Home;
