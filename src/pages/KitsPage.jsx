import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const products = [
  { 
    id: 1,
    name: 'Kit Complet CP', 
    items: '15 articles inclus',
    price: '15.000', 
    oldPrice: null, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn4hOVZr7MDtkun28_gbxMg3ICwMTqfLsTAX9EcIEAcyZYGbkG9WHIgcZQbMqOYCbAkAL2hppYFcqnw9VrkvzA4bzrn7UDUyq_WIhkNNfIobW3RXdxjqjCQ44AERgqTtvEos8svxwrNvArjoOxkty4r_9ATbpExoMRJ8rEqPgcTLNfJs8QtX4xFBNnEMl-gr4W1pMcfOCxbrxXMovOMg7PUywJJ0ZyiCI3s7CRc7jOhighEhVT-NvbWdbUZUUG94L51GE0Wg5krNY', 
    discount: 'Populaire' 
  },
  { 
    id: 2,
    name: 'Pack Essentiel 6ème', 
    items: '22 articles inclus',
    price: '25.000', 
    oldPrice: null, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL_yVFlZQlwu_1QDaAT5-im6uBao8plT5CBRdVT3VahrlP9btCbuh9t936RNo79u5iuDOqzq3V8dDo2NVCrlY4yueId6UAP9YAMc-GeXTaUAQEyuA7nkeQ4Mo_0SGJYRmunYG8Stb8AfrHJVxPQw2SS5xLzUq8A84I89TreNkgnAP3zuC3zR2fTsBTc1jpJx0Aww2i30M4GB1Ruq_8UNSmfSThIWmvGOxyF4nVdU0IT8Xa5Wny53arT3wyZ2l3rXsqEM8Uguft_cI', 
    discount: null 
  },
  { 
    id: 3,
    name: 'Kit Lycée Terminale', 
    items: '18 articles inclus',
    price: '32.000', 
    oldPrice: '38.000', 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALN5z1_wU0j1JK9worMLWzWMF9-WwzKLfohs6QlqY3DQYeGGtyTgzq0639MEELbpFAKgp15ITMffq-ai88sKUHd2FT_zoURXw1ihRJftuZjvgRlhvWK6EQiX_k-RLOGGcG3BKt0l5R04RhAH-ARVZOADuuo1fdDQ-XQEikoek2dmknAmLUDVhfjJRDRK3PhFWwX1tsXAywmwax6hoROltv3n4zTm3WgOxUInxm_HW85nIfl4LyAgSWVfh8HVaYbherhIdKQVV63A0', 
    discount: '-15%' 
  },
  { 
    id: 4,
    name: 'Kit Collège 5ème', 
    items: '20 articles inclus',
    price: '22.000', 
    oldPrice: null, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL_yVFlZQlwu_1QDaAT5-im6uBao8plT5CBRdVT3VahrlP9btCbuh9t936RNo79u5iuDOqzq3V8dDo2NVCrlY4yueId6UAP9YAMc-GeXTaUAQEyuA7nkeQ4Mo_0SGJYRmunYG8Stb8AfrHJVxPQw2SS5xLzUq8A84I89TreNkgnAP3zuC3zR2fTsBTc1jpJx0Aww2i30M4GB1Ruq_8UNSmfSThIWmvGOxyF4nVdU0IT8Xa5Wny53arT3wyZ2l3rXsqEM8Uguft_cI', 
    discount: null 
  },
  { 
    id: 5,
    name: 'Kit Primaire CE1', 
    items: '16 articles inclus',
    price: '18.500', 
    oldPrice: null, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn4hOVZr7MDtkun28_gbxMg3ICwMTqfLsTAX9EcIEAcyZYGbkG9WHIgcZQbMqOYCbAkAL2hppYFcqnw9VrkvzA4bzrn7UDUyq_WIhkNNfIobW3RXdxjqjCQ44AERgqTtvEos8svxwrNvArjoOxkty4r_9ATbpExoMRJ8rEqPgcTLNfJs8QtX4xFBNnEMl-gr4W1pMcfOCxbrxXMovOMg7PUywJJ0ZyiCI3s7CRc7jOhighEhVT-NvbWdbUZUUG94L51GE0Wg5krNY', 
    discount: null 
  },
  { 
    id: 6,
    name: 'Kit Lycée Première', 
    items: '25 articles inclus',
    price: '35.000', 
    oldPrice: '42.000', 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALN5z1_wU0j1JK9worMLWzWMF9-WwzKLfohs6QlqY3DQYeGGtyTgzq0639MEELbpFAKgp15ITMffq-ai88sKUHd2FT_zoURXw1ihRJftuZjvgRlhvWK6EQiX_k-RLOGGcG3BKt0l5R04RhAH-ARVZOADuuo1fdDQ-XQEikoek2dmknAmLUDVhfjJRDRK3PhFWwX1tsXAywmwax6hoROltv3n4zTm3WgOxUInxm_HW85nIfl4LyAgSWVfh8HVaYbherhIdKQVV63A0', 
    discount: '-20%' 
  },
  { 
    id: 7,
    name: 'Kit Maternelle', 
    items: '12 articles inclus',
    price: '12.000', 
    oldPrice: null, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAn4hOVZr7MDtkun28_gbxMg3ICwMTqfLsTAX9EcIEAcyZYGbkG9WHIgcZQbMqOYCbAkAL2hppYFcqnw9VrkvzA4bzrn7UDUyq_WIhkNNfIobW3RXdxjqjCQ44AERgqTtvEos8svxwrNvArjoOxkty4r_9ATbpExoMRJ8rEqPgcTLNfJs8QtX4xFBNnEMl-gr4W1pMcfOCxbrxXMovOMg7PUywJJ0ZyiCI3s7CRc7jOhighEhVT-NvbWdbUZUUG94L51GE0Wg5krNY', 
    discount: null 
  },
  { 
    id: 8,
    name: 'Kit Collège 4ème', 
    items: '21 articles inclus',
    price: '23.000', 
    oldPrice: null, 
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL_yVFlZQlwu_1QDaAT5-im6uBao8plT5CBRdVT3VahrlP9btCbuh9t936RNo79u5iuDOqzq3V8dDo2NVCrlY4yueId6UAP9YAMc-GeXTaUAQEyuA7nkeQ4Mo_0SGJYRmunYG8Stb8AfrHJVxPQw2SS5xLzUq8A84I89TreNkgnAP3zuC3zR2fTsBTc1jpJx0Aww2i30M4GB1Ruq_8UNSmfSThIWmvGOxyF4nVdU0IT8Xa5Wny53arT3wyZ2l3rXsqEM8Uguft_cI', 
    discount: null 
  },
];

export default function CataloguePage() {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className="bg-background-light min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex text-sm mb-6 text-slate-500 gap-2 items-center">
          <Link to="/" className="hover:text-primary">Accueil</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="font-semibold text-primary">Kits Scolaires</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">Kits Scolaires par Classe</h1>
            <p className="text-lg text-primary/70 max-w-2xl">
              Évitez la corvée des courses de rentrée. Trouvez en un clic le pack complet préparé selon la liste officielle de votre établissement.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white p-1 rounded-lg border border-primary/10 shadow-sm">
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 text-sm font-semibold rounded ${viewMode === 'grid' ? 'bg-primary text-white shadow-md' : 'hover:bg-primary/10 text-primary transition-colors'}`}
            >
              Grille
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 text-sm font-semibold rounded ${viewMode === 'list' ? 'bg-primary text-white shadow-md' : 'hover:bg-primary/10 text-primary transition-colors'}`}
            >
              Liste
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link 
              key={product.id} 
              to={`/produit/${product.id}`}
              className="group bg-white rounded-xl border border-primary/10 overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-primary/5">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={product.name} 
                  src={product.image} 
                />
                {product.discount && (
                  <div className="absolute top-3 left-3 bg-primary/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.discount}
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <span className="material-symbols-outlined text-sm">inventory_2</span>
                  <span>{product.items}</span>
                </div>
                <div className="mt-auto pt-4 flex flex-col gap-4">
                  <div className="text-2xl font-black text-primary">{product.price} F</div>
                  <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95">
                    <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
