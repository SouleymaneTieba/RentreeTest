import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import CataloguePage from './pages/CataloguePage';
import KitsPage from './pages/KitsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/connexion" element={<LoginPage />} />
        <Route path="/inscription" element={<RegisterPage />} />
        <Route path="/paiement" element={<CartPage />} />
        <Route path="/panier" element={
          <>
            <Header />
            <CartPage />
          </>
        } />
        <Route path="/produit/:id" element={
          <>
            <Header />
            <ProductDetailPage />
          </>
        } />
        <Route path="/kits" element={
          <>
            <Header />
            <KitsPage />
          </>
        } />
        <Route path="/catalogue" element={
          <>
            <Header />
            <CataloguePage />
          </>
        } />
        <Route path="/" element={
          <>
            <Header />
            <LandingPage />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
