import './App.css';
import Layout from './components/Layout';
import Frontpage from './pages/Frontpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Frontpage />} />
            <Route path='product/:productId' element={<Product />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;