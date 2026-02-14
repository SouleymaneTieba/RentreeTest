import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const products = [
  { 
    id: 1,
    name: 'Sac à dos Ergonomique Bleu', 
    category: 'Maroquinerie',
    price: '29.500', 
    oldPrice: null, 
    rating: 4.5,
    reviews: 42,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGnFqkgE2MEJKy5idb-N332eK6EncYYTpvcO9ugD1xzGXb9PiaFRL5Z7ZF7VHaHxvEDgdH9ON8GdxlBuJXbH-iI25XhCEL8-kQ9zlpBTQCJgzsXLPvu3v5txxO686iaDBDTAZfhJ8_Rs__25wiu0du0AXOWtHPR0hvFjQEvGPwfpwvh8GLFIpAEiyyzp9X6YKpfifmMgpbpuojAlL-ENPW8AmWbkCPRqJ5ICZ6klUDA5FG0xyMWKiUu38__186oMs_E2mQS_2OYF0', 
    discount: 'Nouveauté' 
  },
  { 
    id: 2,
    name: 'Trousse Garnie 30 pièces', 
    category: 'Accessoires',
    price: '8.200', 
    oldPrice: null, 
    rating: 5,
    reviews: 15,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAT1GJC46yMW_tn8ay8JxTe8YWEUxJCD66E-9I7lnkE6_FWF6TkE9DygaEyIzdDMhMvKDunBAX8BLc_n-G_50lBjaY_r-LoPoF57SC6OnPzahNs7Yl5s7uJIO_4Q5VUZdVF3f3Y9ndC6DNODkARwpCljjTxLqGbi3sqiG0NFZwTSkRq4J24bGfcSYbtMPUPAby6mPOKScOzbZs2-i9b5WjOiErihtc8Hkpw2CNFFZvwNrk828xA7mx0mJgxnHkUwSHJAXeVOtj0ds', 
    discount: null 
  },
  { 
    id: 3,
    name: 'Cahier Clairefontaine A4', 
    category: 'Papeterie',
    price: '1.450', 
    oldPrice: '1.800', 
    rating: 5,
    reviews: 128,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqLQBV9_DbpbIwRMIvNjGImfqEVH0rSbojfYUa4COeta1mmrHVWy4ElBHxlkOe6ENeNl45wV9QknDo18tow8mDN6bAL3jD7dDRNuEknhTJPjYppUh40e4j4GsShA3t7XUgDLyRdHxj8yseax9-ZyREBjoUXMEQmotRbrI5DTFTj0lFjbYmMDRl-pnBhGnsS61JhUq_WYPkXrM-EeAjqORAfo0346S3LyyLrM1pnKRbtag6NMVZ6tCVawL1tu7XAVcd8nMmK3uLnJk', 
    discount: '-20%' 
  },
  { 
    id: 4,
    name: 'Lot stylos Bic (x50)', 
    category: 'Écriture',
    price: '4.500', 
    oldPrice: null, 
    rating: 4,
    reviews: 89,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQY6T40f_wku1jJOxIdOpNikhbbiVUUagG37izfWy91kZjsUM8HQny_vMkMcXQRV7DzltdVe9yWk2SoIrWxPPgk9o-Wh8CN0atoigRBgQokCjKBeJOhIVCtovV6hJLGfGuD_RB1uiUL6f6dlcZ8IszijJ10bl7u0MlW6AEcqF0cf6A00mMUHVP23QU7_7VYxMdDvwMU1dsLvMNF807SwP-ewgwIY8d_wyryL3wloCduTNAOIUDj5aAuWUgMOTZORv718gJWN-63y4', 
    discount: null 
  },
  { 
    id: 5,
    name: 'Gomme Staedtler', 
    category: 'Accessoires',
    price: '950', 
    oldPrice: null, 
    rating: 4.5,
    reviews: 34,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIQEWh7B72v3AhC6oJEDy9Mts4tN-e6FfZg9NKkrajIAEotZ9tDMUJmXB5rH0S-TMoz3BMguex2WpZE8OEMuV7lao0IAO6rq_tyZ25BbZEB0FtOKmXPyWqVWmeNwYu5bGian6PtezrY46kYyHfiAeydrwYP0Hhzw7-V3E_FYTG-A5bWrQ0yjiUORNfSJke5NJ1xZva4aMdsU8Isf719BX5omxuh24OXbftHkulZDWBgOygzWq2hHMUlZj0w3aUVIHPZa_dR-sKfuM', 
    discount: null 
  },
  { 
    id: 6,
    name: 'Crayons de couleur (x24)', 
    category: 'Beaux-Arts',
    price: '6.800', 
    oldPrice: null, 
    rating: 4.5,
    reviews: 67,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClyxtOyi0kJyv2tHeov2jEypZVv_3sc7cKKAV7a1uSaoIPVDc-AY0RpO4d9nHF5eV7hqrxGcVI69S6yBmnrShcwbZev_GWl9Fr1MSKK4iWfjzuwH2fM4z2tVypEOGMWG3T5wBhBqWuOWPl-tQXUtNfWaJihsuklH0PCisAw0qcZ0Res5FtQr8v1ogsGD4A-S_3J25NCpG_rcTbEHYDINcnJgoXtu9y_cg6wqa2u8VFoZFwKa2KM9X5L98byJ4Bn3H9Qk0nslMaD44', 
    discount: null 
  },
  { 
    id: 7,
    name: 'Règle 30cm transparente', 
    category: 'Géométrie',
    price: '750', 
    oldPrice: null, 
    rating: 4,
    reviews: 23,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIQEWh7B72v3AhC6oJEDy9Mts4tN-e6FfZg9NKkrajIAEotZ9tDMUJmXB5rH0S-TMoz3BMguex2WpZE8OEMuV7lao0IAO6rq_tyZ25BbZEB0FtOKmXPyWqVWmeNwYu5bGian6PtezrY46kYyHfiAeydrwYP0Hhzw7-V3E_FYTG-A5bWrQ0yjiUORNfSJke5NJ1xZva4aMdsU8Isf719BX5omxuh24OXbftHkulZDWBgOygzWq2hHMUlZj0w3aUVIHPZa_dR-sKfuM', 
    discount: null 
  },
  { 
    id: 8,
    name: 'Compas Maped', 
    category: 'Géométrie',
    price: '2.500', 
    oldPrice: null, 
    rating: 4.5,
    reviews: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOMNHk-01Czn7PalB9zZdowP8gYNBuIjXbFM_W_NQ8WNQsGqgadEzBI-Ct6Py311SxQF9LnMnSITEdnB1diCgWUYJu5GChpg_jZzkEQAO2ubm8UFFqDcP_OAdZTKxFiQcr4RDbrHrm--ty6AoFe1PbjYSBXYKL98nOKzuaa-BV72BohmfHLQ626f2UCOBsBk1W3SziO3E0YYIZGb1ytQLNIqpC_s-PoT4qs4b6RIIx3v2IPZPAg1WzLVKYvghzBDO2wtPy16UUjas', 
    discount: null 
  },
];

const categories = [
  { name: 'Écriture & Traçage', checked: true },
  { name: 'Papeterie & Cahiers', checked: false },
  { name: 'Maroquinerie', checked: false },
];

const brands = [
  { name: 'Clairefontaine', checked: false },
  { name: 'Bic', checked: false },
  { name: 'Maped', checked: false },
];

export default function CataloguePage() {
  const [sortBy, setSortBy] = useState('recent');

  return (
    <div className="bg-background-light min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-primary">Accueil</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-900 font-medium">Fournitures Scolaires</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-slate-900">Filtres</h2>
                <button className="text-xs text-primary font-medium hover:underline">Réinitialiser</button>
              </div>
              
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Catégorie</h3>
                <div className="space-y-3">
                  {categories.map((cat, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        defaultChecked={cat.checked}
                        className="rounded border-slate-300 text-primary focus:ring-primary" 
                      />
                      <span className="text-sm text-slate-600 group-hover:text-slate-900">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Prix (FCFA)</h3>
                <div className="px-2">
                  <input 
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" 
                    type="range" 
                    max="200" 
                    min="0" 
                    defaultValue="100"
                  />
                  <div className="flex justify-between mt-2 text-xs text-slate-500 font-medium">
                    <span>0 F</span>
                    <span>150.000 F</span>
                  </div>
                </div>
              </div>

              {/* Brand */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Marque</h3>
                <div className="space-y-3">
                  {brands.map((brand, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        defaultChecked={brand.checked}
                        className="rounded border-slate-300 text-primary focus:ring-primary" 
                      />
                      <span className="text-sm text-slate-600 group-hover:text-slate-900">{brand.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1">
            {/* Sorting & Stats */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-slate-900">{products.length}</span> produits trouvés
              </p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-500 whitespace-nowrap">Trier par :</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border-slate-200 rounded-lg focus:ring-primary focus:border-primary py-1.5 pl-3 pr-8"
                >
                  <option value="recent">Plus récents</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                  <option value="rating">Mieux notés</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link 
                  key={product.id} 
                  to={`/produit/${product.id}`}
                  className="product-card group bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-square bg-slate-50 overflow-hidden">
                    <img 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      src={product.image} 
                    />
                    {product.discount && (
                      <div className="absolute top-3 left-3 text-white text-[10px] font-bold uppercase px-2 py-1 rounded bg-green-500">
                        {product.discount}
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-4 px-4">
                      <button className="cart-btn w-full bg-primary text-white py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{product.category}</span>
                    <h3 className="font-medium text-slate-900 text-sm mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-3">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`material-symbols-outlined text-sm ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}>
                            {i < Math.floor(product.rating) ? 'star' : (i === Math.floor(product.rating) && product.rating % 1 >= 0.5 ? 'star_half' : 'star')}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-slate-400">({product.reviews})</span>
                    </div>
                    <div className="mt-auto flex items-baseline gap-2">
                      <span className="text-lg font-bold text-slate-900">{product.price} F</span>
                      {product.oldPrice && (
                        <span className="text-xs text-slate-400 line-through">{product.oldPrice} F</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
