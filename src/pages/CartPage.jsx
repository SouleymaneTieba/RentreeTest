import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cartItems = [
  { id: 1, name: 'Kit Scolaire Premium', price: 24900, quantity: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIQEWh7B72v3AhC6oJEDy9Mts4tN-e6FfZg9NKkrajIAEotZ9tDMUJmXB5rH0S-TMoz3BMguex2WpZE8OEMuV7lao0IAO6rq_tyZ25BbZEB0FtOKmXPyWqVWmeNwYu5bGian6PtezrY46kYyHfiAeydrwYP0Hhzw7-V3E_FYTG-A5bWrQ0yjiUORNfSJke5NJ1xZva4aMdsU8Isf719BX5omxuh24OXbftHkulZDWBgOygzWq2hHMUlZj0w3aUVIHPZa_dR-sKfuM' },
  { id: 2, name: 'Trousse Complete', price: 8900, quantity: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIQEWh7B72v3AhC6oJEDy9Mts4tN-e6FfZg9NKkrajIAEotZ9tDMUJmXB5rH0S-TMoz3BMguex2WpZE8OEMuV7lao0IAO6rq_tyZ25BbZEB0FtOKmXPyWqVWmeNwYu5bGian6PtezrY46kYyHfiAeydrwYP0Hhzw7-V3E_FYTG-A5bWrQ0yjiUORNfSJke5NJ1xZva4aMdsU8Isf719BX5omxuh24OXbftHkulZDWBgOygzWq2hHMUlZj0w3aUVIHPZa_dR-sKfuM' },
];

export default function CartPage() {
  const location = useLocation();
  const isPaymentPage = location.pathname === '/paiement';
  
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('whatsapp');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCosts = {
    standard: 2500,
    relais: 1500,
    express: 7500
  };
  const shipping = shippingCosts[shippingMethod];
  const total = subtotal + shipping;

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Bonjour! Je souhaite commander sur MaRentreeFacile:\n\n` +
      cartItems.map(item => `- ${item.name} x${item.quantity}: ${item.price.toLocaleString()} F`).join('\n') +
      `\n\nSous-total: ${subtotal.toLocaleString()} F\n` +
      `Livraison (${shippingMethod === 'standard' ? 'Standard' : shippingMethod === 'relais' ? 'Point Relais' : 'Express'}): ${shipping.toLocaleString()} F\n` +
      `Total: ${total.toLocaleString()} F\n\n` +
      `Merci de me confirmer la commande!`
    );
    window.open(`https://wa.me/22500000000?text=${message}`, '_blank');
  };

  // CART VIEW (for /panier)
  if (!isPaymentPage) {
    return (
      <>
        
        <div className="bg-background-light min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Mon Panier</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl p-6 border border-slate-200 flex gap-6">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-2">{item.name}</h3>
                      <p className="text-primary font-bold">{item.price.toLocaleString()} F</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-slate-200 rounded-lg">
                        <button className="px-3 py-1 hover:bg-slate-100">-</button>
                        <span className="px-3 font-semibold">{item.quantity}</span>
                        <button className="px-3 py-1 hover:bg-slate-100">+</button>
                      </div>
                      <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 sticky top-24">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Résumé</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sous-total</span>
                      <span className="font-semibold">{subtotal.toLocaleString()} F</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Livraison</span>
                      <span className="font-semibold text-green-600">Gratuite</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between text-lg">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-primary">{subtotal.toLocaleString()} F</span>
                    </div>
                  </div>
                  <Link to="/paiement" className="block w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold text-center">
                    Passer à la paiement
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // PAYMENT VIEW (for /paiement)
  return (
    <div className="bg-background-light min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              alt="MaRentreeFacile Logo" 
              className="h-10 w-auto" 
              src="/src/assets/logo_marentreefacile.png"
            />
          </div>
          <Link to="/panier" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            <span className="material-symbols-outlined">arrow_back</span>
            Retourner au panier
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Checkout Form */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* Progress Indicator */}
            <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
              <span className="text-primary flex items-center gap-1">
                Panier <span className="material-symbols-outlined text-xs">chevron_right</span>
              </span>
              <span className="text-primary flex items-center gap-1">
                Livraison <span className="material-symbols-outlined text-xs">chevron_right</span>
              </span>
              <span className="text-slate-800 font-bold">Paiement</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight">Finalisez votre commande</h2>
              <p className="text-slate-500 flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500 text-lg">verified_user</span>
                Paiement 100% sécurisé
              </p>
            </div>

            {/* Section: Contact */}
            <section className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">mail</span>
                <h3 className="text-lg font-bold">Informations de Contact</h3>
              </div>
              <div className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Adresse Email</label>
                  <input 
                    className="w-full rounded-lg border border-primary/20 bg-background-light focus:border-primary focus:ring-primary h-12 px-4" 
                    placeholder="votre@email.com" 
                    type="email"
                  />
                </div>
              </div>
            </section>

            {/* Section: Shipping Address */}
            <section className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <h3 className="text-lg font-bold">Adresse de Livraison</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium mb-1.5">Prénom</label>
                  <input 
                    className="w-full rounded-lg border border-primary/20 bg-background-light focus:border-primary focus:ring-primary h-12 px-4" 
                    placeholder="Jean" 
                    type="text"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium mb-1.5">Nom</label>
                  <input 
                    className="w-full rounded-lg border border-primary/20 bg-background-light focus:border-primary focus:ring-primary h-12 px-4" 
                    placeholder="Dupont" 
                    type="text"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1.5">Adresse</label>
                  <input 
                    className="w-full rounded-lg border border-primary/20 bg-background-light focus:border-primary focus:ring-primary h-12 px-4" 
                    placeholder="123 Rue de la Scolarité" 
                    type="text"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium mb-1.5">Code Postal</label>
                  <input 
                    className="w-full rounded-lg border border-primary/20 bg-background-light focus:border-primary focus:ring-primary h-12 px-4" 
                    placeholder="75000" 
                    type="text"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-sm font-medium mb-1.5">Ville</label>
                  <input 
                    className="w-full rounded-lg border border-primary/20 bg-background-light focus:border-primary focus:ring-primary h-12 px-4" 
                    placeholder="Paris" 
                    type="text"
                  />
                </div>
              </div>
            </section>

            {/* Section: Shipping Method */}
            <section className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
                <h3 className="text-lg font-bold">Méthode d'Expédition</h3>
              </div>
              <div className="space-y-3">
                <label className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer ${shippingMethod === 'standard' ? 'border-primary bg-primary/5' : 'border-primary/20 hover:bg-background-light'}`}>
                  <div className="flex items-center gap-3">
                    <input 
                      checked={shippingMethod === 'standard'} 
                      onChange={() => setShippingMethod('standard')}
                      className="text-primary focus:ring-primary" 
                      name="shipping" 
                      type="radio"
                    />
                    <div>
                      <p className="font-bold">Standard à domicile</p>
                      <p className="text-xs text-slate-500">Livraison sous 3-5 jours ouvrés</p>
                    </div>
                  </div>
                  <span className="font-bold">2 500 F</span>
                </label>

                <label className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer ${shippingMethod === 'relais' ? 'border-primary bg-primary/5' : 'border-primary/20 hover:bg-background-light'}`}>
                  <div className="flex items-center gap-3">
                    <input 
                      checked={shippingMethod === 'relais'} 
                      onChange={() => setShippingMethod('relais')}
                      className="text-primary focus:ring-primary" 
                      name="shipping" 
                      type="radio"
                    />
                    <div>
                      <p className="font-bold">Point Relais Colis</p>
                      <p className="text-xs text-slate-500">Livraison sous 4-6 jours ouvrés</p>
                    </div>
                  </div>
                  <span className="font-bold">1 500 F</span>
                </label>

                <label className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer ${shippingMethod === 'express' ? 'border-primary bg-primary/5' : 'border-primary/20 hover:bg-background-light'}`}>
                  <div className="flex items-center gap-3">
                    <input 
                      checked={shippingMethod === 'express'} 
                      onChange={() => setShippingMethod('express')}
                      className="text-primary focus:ring-primary" 
                      name="shipping" 
                      type="radio"
                    />
                    <div>
                      <p className="font-bold">Express Chronopost</p>
                      <p className="text-xs text-slate-500">Livraison demain avant 13h</p>
                    </div>
                  </div>
                  <span className="font-bold">7 500 F</span>
                </label>
              </div>
            </section>

            {/* Section: Payment - WhatsApp */}
            <section className="bg-white p-6 rounded-xl border border-primary/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary">chat</span>
                <h3 className="text-lg font-bold">Méthode de Paiement</h3>
              </div>
              
              <div className="space-y-4">
                <label className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer ${paymentMethod === 'whatsapp' ? 'border-primary bg-primary/5' : 'border-primary/20 hover:bg-background-light'}`}>
                  <div className="flex items-center gap-3">
                    <input 
                      checked={paymentMethod === 'whatsapp'} 
                      onChange={() => setPaymentMethod('whatsapp')}
                      className="text-primary focus:ring-primary" 
                      name="payment" 
                      type="radio"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 text-xl">💬</span>
                      <span className="font-bold">Paiement via WhatsApp</span>
                    </div>
                  </div>
                </label>

                {paymentMethod === 'whatsapp' && (
                  <div className="p-4 border-2 border-primary rounded-xl bg-primary/5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-green-500 text-2xl">💬</span>
                      <div>
                        <p className="font-bold">Paiement simple via WhatsApp</p>
                        <p className="text-sm text-slate-500">Envoyez votre commande directement sur WhatsApp</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-sm text-slate-600 mb-3">
                        <strong>Comment ça marche:</strong>
                      </p>
                      <ol className="text-sm text-slate-600 space-y-2 list-decimal list-inside">
                        <li>Cliquez sur "Confirmer la commande"</li>
                        <li>Vous serez redirigé vers WhatsApp</li>
                        <li>Envoyez le message avec votre commande</li>
                        <li>Notre équipe vous répondra pour confirmer</li>
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary (Sticky) */}
          <aside className="lg:col-span-5 xl:col-span-4 w-full lg:sticky lg:top-24">
            <div className="bg-white rounded-xl border border-primary/10 shadow-xl overflow-hidden">
              <div className="p-6 border-b border-primary/10 bg-primary/5">
                <h3 className="text-lg font-bold">Résumé de la commande</h3>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Items List */}
                <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="relative w-16 h-16 bg-background-light rounded-lg flex-shrink-0 border border-primary/10">
                        <img 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded-lg" 
                          src={item.image} 
                        />
                        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{item.name}</p>
                        <p className="text-xs text-slate-500">Edition 2024</p>
                      </div>
                      <span className="font-bold text-sm text-slate-700">{(item.price * item.quantity).toLocaleString()} F</span>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 pt-6 border-t border-primary/10">
                  <div className="flex justify-between text-slate-600">
                    <span>Sous-total</span>
                    <span>{subtotal.toLocaleString()} F</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Livraison</span>
                    <span className="text-green-500 font-medium">{shipping.toLocaleString()} F</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Taxes (TVA 20%)</span>
                    <span>0 F</span>
                  </div>
                  <div className="flex justify-between text-xl font-black pt-3 border-t border-primary/10">
                    <span>Total</span>
                    <span className="text-primary">{total.toLocaleString()} F</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={handleWhatsAppOrder}
                  className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Confirmer la Commande</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>

                {/* Extra Trust Elements */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/10">
                  <div className="flex flex-col items-center text-center gap-1">
                    <span className="material-symbols-outlined text-slate-400">verified</span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Garantie 2 ans</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-1">
                    <span className="material-symbols-outlined text-slate-400">assignment_return</span>
                    <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Retours 30 jours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Assistance Card */}
            <div className="mt-6 p-4 rounded-xl border border-primary/10 bg-white/50 flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <span className="material-symbols-outlined text-primary">support_agent</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Besoin d'aide ?</p>
                <p className="text-sm font-medium">Contactez notre support</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-8 mt-12 border-t border-primary/10 text-center space-y-4">
        <div className="flex justify-center gap-6 text-slate-400">
          <span className="material-symbols-outlined">security</span>
          <span className="material-symbols-outlined">payments</span>
          <span className="material-symbols-outlined">shield</span>
        </div>
        <p className="text-xs text-slate-500">
          © 2024 MaRentreeFacile. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
