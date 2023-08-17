import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ScrollToTop } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import { FilterProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';
import { Provider } from 'react-redux';
import { store } from './store/slices/ProductSlice';
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from './context/sessionContext';

const LazyApp = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <FilterProvider>
      <SessionProvider>
        <CartProvider>
          <Router>
            <ScrollToTop />
            <ToastContainer />
            <Suspense fallback={<div>Loading...</div>}>
              <LazyApp />
            </Suspense>
          </Router>
        </CartProvider>
      </SessionProvider>
    </FilterProvider>
  </Provider>
);
