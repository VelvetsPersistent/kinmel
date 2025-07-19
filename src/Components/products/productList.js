import Jeans from '../../assets/jeans.png';
import Hoodie from '../../assets/hoodie.png';
import LeatherJacket from '../../assets/leather-jacket.png';
import Skirt from '../../assets/skirt.png';
import Tshirt from '../../assets/tshirt.png';
import Sleepsuit from '../../assets/sleepsuit.png';
import Shirt from '../../assets/shirt.png';
import Dress from '../../assets/dress.png';
import Skater from '../../assets/skater.png';
import Sweater from '../../assets/sweater.png';
import Babyshirt from '../../assets/baby-shirt.png';
import ShirtDress from '../../assets/shirt-dress.png';

const ProductList = [
  {
    id: 1,
    name: 'Sport TShirt',
    image: Tshirt,
    price: 500,
    oldprice: 700,
    onSale: true,
    newArrival: false,
    category: 'Mens',
  },
  {
    id: 2,
    name: 'Slim fit Jeans',
    image: Jeans,
    price: 3500,
    oldprice: null,
    onSale: false,
    newArrival: true,
    category: 'Mens',
  },
  {
    id: 3,
    name: 'Leather Jacket',
    image: LeatherJacket,
    price: 5000,
    oldprice: 7000,
    onSale: false,
    newArrival: false,
    category: 'Mens',
  },
  {
    id: 4,
    name: 'Skater Dress',
    image: Skater,
    price: 2200,
    oldprice: 3000,
    onSale: false,
    newArrival: false,
    category: 'Womens',
  },
  {
    id: 5,
    name: 'Baby Sleepsuit',
    image: Sleepsuit,
    price: 900,
    oldprice: 1000,
    onSale: false,
    newArrival: false,
    category: 'Kids',
  },
  {
    id: 6,
    name: 'Long Sleeve Shirt',
    image: Shirt,
    price: 1500,
    oldprice: 2000,
    onSale: false,
    newArrival: false,
    category: 'Kids',
  },
  {
    id: 7,
    name: 'Baby Shirt',
    image: Babyshirt,
    price: 1000,
    oldprice: 1300,
    onSale: true,
    newArrival: false,
    category: 'Kids',
  },
  {
    id: 8,
    name: 'Hoodie',
    image: Hoodie,
    price: 2000,
    oldprice: 2800,
    onSale: true,
    newArrival: true,
    category: 'Mens',
  },
  {
    id: 9,
    name: 'Sweater',
    image: Sweater,
    price: 1700,
    oldprice: 2000,
    onSale: false,
    newArrival: true,
    category: 'Womens',
  },
  {
    id: 10,
    name: 'Shirt Dress',
    image: ShirtDress,
    price: 3000,
    oldprice: null,
    onSale: false,
    newArrival: true,
    category: 'Womens',
  },
];

export default ProductList;
