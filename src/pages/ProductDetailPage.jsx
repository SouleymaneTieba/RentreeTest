import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: 'Kit Scolaire Premium Complet',
    price: 24900,
    oldPrice: 31000,
    description: 'Kit scolaire complet comprenant tout le nécessaire pour la rentrée. Qualité professionnelle, résistant et durable.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIQEWh7B72v3AhC6oJEDy9Mts4tN-e6FfZg9NKkrajIAEotZ9tDMUJmXB5rH0S-TMoz3BMguex2WpZE8OEMuV7lao0IAO6rq_tyZ25BbZEB0FtOKmXPyWqVWmeNwYu5bGian6PtezrY46kYyHfiAeydrwYP0Hhzw7-V3E_FYTG-A5bWrQ0yjiUORNfSJke5NJ1xZva4aMdsU8Isf719BX5omxuh24OXbftHkulZDWBgOygzWq2hHMUlZj0w3aUVIHPZa_dR-sKfuM',
    features: [
      '1 Sac à dos ergonomique',
      '2 Cahiers A4 96 pages',
      '1 Trousse complète (stylos, crayons, gomme)',
      '1 Règle 30cm',
      '1 Compas professionnel',
      '1 Calculatrice scientifique'
    ]
  };

  return (
    <div className="bg-background-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link to="/" className="hover:text-primary">Accueil</Link>
          <span>/</span>
          <Link to="/catalogue" className="hover:text-primary">Catalogue</Link>
          <span>/</span>
          <span className="text-slate-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <img src={product.image} alt={product.name} className="w-full h-auto rounded-xl" />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">{product.name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-primary">{product.price.toLocaleString()} F</span>
              <span className="text-xl text-slate-400 line-through">{product.oldPrice.toLocaleString()} F</span>
              <span className="bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">-20%</span>
            </div>

            <p className="text-slate-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="font-bold text-slate-900 mb-3">Inclus dans le kit:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-600">
                    <span className="material-symbols-outlined text-secondary-green">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-slate-200 rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-slate-100"
                >
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <span className="px-4 font-semibold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-slate-100"
                >
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <button className="flex-1 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">add_shopping_cart</span>
                Ajouter au panier
              </button>
            </div>

            <div className="bg-white rounded-xl p-4 border border-slate-200 flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">local_shipping</span>
              <div>
                <p className="font-semibold text-slate-900">Livraison gratuite</p>
                <p className="text-sm text-slate-500">Sous 2-3 jours ouvrés</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mb-16 mt-16">
          <div className="flex border-b border-slate-200 overflow-x-auto">
            <button className="px-8 py-4 border-b-2 border-primary text-primary font-bold text-sm whitespace-nowrap">
              Description
            </button>
            <button className="px-8 py-4 border-b-2 border-transparent text-slate-400 font-bold text-sm whitespace-nowrap hover:text-primary transition-colors">
              Spécifications
            </button>
            <button className="px-8 py-4 border-b-2 border-transparent text-slate-400 font-bold text-sm whitespace-nowrap hover:text-primary transition-colors">
              Livraison & Retours
            </button>
          </div>
          <div className="py-8 text-slate-600">
            <p className="mb-4">Notre Kit Scolaire Premium Complet est le fruit de longs mois de recherche pour offrir aux élèves le meilleur équilibre entre qualité et design tendance. Tout le nécessaire pour une rentrée réussie dans un kit complet et pratique.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Sac à dos ergonomique avec bretelles matelassées
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Cahiers A4 96 pages de qualité supérieure
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Trousse complète avec stylos et crayons de qualité
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                Outils de géométrie professionnels inclus
              </li>
            </ul>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            Avis Clients
            <span className="text-primary text-sm bg-primary/10 px-2 py-0.5 rounded">4.8/5</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* User Review 1 */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1">
                  <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                </div>
                <span className="text-xs text-slate-400">Il y a 2 jours</span>
              </div>
              <p className="font-bold text-sm mb-2">Parfait pour la rentrée !</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Ma fille adore ce kit, tout est inclus et de bonne qualité. Très pratique avec le sac à dos ergonomique.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  SM
                </div>
                <span className="text-xs font-semibold text-primary">Sophie M.</span>
                <span className="text-[10px] text-secondary-green font-bold ml-auto">Achat vérifié</span>
              </div>
            </div>

            {/* User Review 2 */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1">
                  <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                  <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                  <span className="material-symbols-outlined text-slate-300 text-sm">star</span>
                </div>
                <span className="text-xs text-slate-400">Il y a 1 semaine</span>
              </div>
              <p className="font-bold text-sm mb-2">Excellent rapport qualité/prix</p>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Le kit est vraiment complet, rien à acheter d'autre. Seul bémol, la trousse pourrait être plus grande.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  JD
                </div>
                <span className="text-xs font-semibold text-primary">Jean D.</span>
                <span className="text-[10px] text-secondary-green font-bold ml-auto">Achat vérifié</span>
              </div>
            </div>

            {/* Write Review CTA */}
            <div className="p-6 bg-primary/5 rounded-xl border-2 border-dashed border-primary/20 flex flex-col items-center justify-center text-center">
              <h3 className="text-lg font-bold mb-2">Partagez votre avis</h3>
              <p className="text-sm text-slate-600 mb-4">
                Vous avez acheté ce produit ? Aidez les autres parents !
              </p>
              <button className="bg-primary text-white text-sm font-bold px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                Rédiger un avis
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
