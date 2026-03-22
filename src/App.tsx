/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/Layout';
import { Home } from './components/Home';
import { SearchResults } from './components/SearchResults';
import { ProductDetail } from './components/ProductDetail';
import { Cart } from './components/Cart';
import { Dashboard } from './components/Dashboard';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <ProductsProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </ProductsProvider>
      </CartProvider>
    </Router>
  );
}

