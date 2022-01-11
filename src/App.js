import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Products from './components/Products';
import Admin from './components/admin/Admin'; 
import Navbar from './Layouts/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './Layouts/Footer';
import Product from './components/Product/Product'
import About from './components/about/About'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div>
      <div><Toaster /></div>

      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element= {<Signup />} />
        <Route path='/courses' element= {<Products />} />
        <Route path='/shop/:productId' element= {<Product />} />
        <Route path='/admin' element= {<Admin />} />
        <Route path='/about' element= {<About />} />
        <Route path='/contact' element= {<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
