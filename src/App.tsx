import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import WrapperComponent from './components/WrapperComponent';

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
       <Header />
          {/* <WrapperComponent> */}
                <Routes>
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/" element={<ProductList />} />
                </Routes>
          {/* </WrapperComponent> */}
        <Footer />
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;

