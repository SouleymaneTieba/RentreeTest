import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import CataloguePage from './pages/CataloguePage';
import KitsPage from './pages/KitsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';

function NotFoundPage() {
  return <main className="min-h-screen grid place-items-center bg-background-light p-6 text-center"><div><h1 className="text-3xl font-bold">Page introuvable</h1><a className="text-primary font-bold hover:underline" href="/">Retour à l'accueil</a></div></main>;
}

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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
