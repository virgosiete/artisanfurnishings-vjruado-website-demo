import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import Process from './pages/Process';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ProductCategory from './pages/ProductCategory';
import SingleProduct from './pages/SingleProduct';
import BlogPost from './pages/BlogPost';
import RequestQuote from './pages/RequestQuote';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="collections" element={<Collections />} />
          <Route path="collections/:category" element={<ProductCategory />} />
          <Route path="collections/:category/:product" element={<SingleProduct />} />
          <Route path="process" element={<Process />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="request-quote" element={<RequestQuote />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;