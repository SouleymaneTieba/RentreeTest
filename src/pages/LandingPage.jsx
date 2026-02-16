import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const categories = [
  { icon: 'edit', title: 'Cahiers & Stylos', desc: "L'essentiel pour bien écrire et s'organiser toute l'année." },
  { icon: 'backpack', title: 'Cartables & Kits', desc: 'Design ergonomique et styles modernes pour petits et grands.' },
  { icon: 'calculate', title: 'Calculatrices & Kits', desc: 'Outils scientifiques de pointe pour les mathématiciens en herbe.' },
  { icon: 'palette', title: 'Beaux-Arts & Loisirs', desc: 'Exprimez votre créativité avec notre sélection artistique complète.' },
];

const products = [
  { name: "Sac à dos Padded Pak'r", brand: 'Eastpak', price: '29.500', oldPrice: '36.000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARqzQStATqdAaPI2w1wzqZS3viILYsPXQHe1RhMlSlCF44JpzVeMeLHUm-1s7R3zYqgI_k2ARrkEYup76SLDIuwQShav4LUJF9JcXjzzTVtugyWSbq-4PGOtYLdvh194oUrO_5TCpHhf7Zyw-JVU3TV1p0QzEOaZFjATnHibr_atH0JTvFHhEDv3dtGSpr6F1VkfZESl7ETPU_lqJQYpMwZ4o7GYBEGfS4JKb6xruMarHKbxEU6r9dEAnOrnvYOCgPPOeDKkTUP0k', discount: '-20%' },
  { name: 'Crayons de Couleur (x48)', brand: 'Faber-Castell', price: '14.750', oldPrice: null, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClyxtOyi0kJyv2tHeov2jEypZVv_3sc7cKKAV7a1uSaoIPVDc-AY0RpO4d9nHF5eV7hqrxGcVI69S6yBmnrShcwbZev_GWl9Fr1MSKK4iWfjzuwH2fM4z2tVypEOGMWG3T5wBhBqWuOWPl-tQXUtNfWaJihsuklH0PCisAw0qcZ0Res5FtQr8v1ogsGD4A-S_3J25NCpG_rcTbEHYDINcnJgoXtu9y_cg6wqa2u8VFoZFwKa2KM9X5L98byJ4Bn3H9Qk0nslMaD44', discount: null },
  { name: 'Cahier spirale A4 (Lot de 3)', brand: 'Oxford', price: '8.500', oldPrice: null, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfK8dPNo5QudOskAYYv2l4w3o_Q9HkmcKpkkaOuIRRJFhy1uWNbW28S4ABa2hhP6oWSNIKmSOrTwbja329mvhJ_qsVZsTR5WsqO0fVJMa3ljHtDkNBshJVXSRNjdO4r_Su5J5zxgk-Hcq_XeFzZtmmAHqMbtlEQyc66F926sS6REm17fya8KakahDIraa8pvFL6VzGVqlv4TgmLESS9TZsJhEo3XNogEJhyeAWLUshiMvdQ7Dt_eRlBZXNzwbyCEeZ4SDpl9S5NcE', discount: 'Nouveau' },
  { name: 'Calculatrice Graphique 35+', brand: 'Casio', price: '45.000', oldPrice: null, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOMNHk-01Czn7PalB9zZdowP8gYNBuIjXbFM_W_NQ8WNQsGqgadEzBI-Ct6Py311SxQF9LnMnSITEdnB1diCgWUYJu5GChpg_jZzkEQAO2ubm8UFFqDcP_OAdZTKxFiQcr4RDbrHrm--ty6AoFe1PbjYSBXYKL98nOKzuaa-BV72BohmfHLQ626f2UCOBsBk1W3SziO3E0YYIZGb1ytQLNIqpC_s-PoT4qs4b6RIIx3v2IPZPAg1WzLVKYvghzBDO2wtPy16UUjas', discount: null },
];

export default function LandingPage() {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center overflow-hidden py-12 lg:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            data-alt="Children with backpacks walking together towards school" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIQEWh7B72v3AhC6oJEDy9Mts4tN-e6FfZg9NKkrajIAEotZ9tDMUJmXB5rH0S-TMoz3BMguex2WpZE8OEMuV7lao0IAO6rq_tyZ25BbZEB0FtOKmXPyWqVWmeNwYu5bGian6PtezrY46kYyHfiAeydrwYP0Hhzw7-V3E_FYTG-A5bWrQ0yjiUORNfSJke5NJ1xZva4aMdsU8Isf719BX5omxuh24OXbftHkulZDWBgOygzWq2hHMUlZj0w3aUVIHPZa_dR-sKfuM"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6 backdrop-blur-sm border border-primary/30 uppercase tracking-widest bg-secondary-green/20 text-secondary-green border-secondary-green/30">Édition Rentrée 2026</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4 md:mb-6 tracking-tight">
              Préparez la Rentrée <span className="text-primary italic">en un Clic !</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-lg leading-relaxed">
              Tout le nécessaire scolaire livré directement chez vous. Gagnez du temps et profitez de nos offres exclusives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalogue" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl transition-all transform hover:-translate-y-1 shadow-[#00a1b1]/30">
                Découvrir les Fournitures
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all">
                Nos Listes Écoles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Parcourir par Catégorie</h2>
            <div className="h-1.5 w-24 bg-primary mt-3 rounded-full"></div>
          </div>
          <Link to="/catalogue" className="text-primary font-bold flex items-center gap-1 hover:underline">
            Tout voir <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <Link 
              key={index} 
              to="/catalogue"
              className="group relative overflow-hidden bg-white p-8 rounded-2xl border border-primary/10 hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="bg-primary/10 text-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
              <p className="text-slate-500 text-sm mb-4">{cat.desc}</p>
              <span className="material-symbols-outlined absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-primary">trending_flat</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Nos Meilleures Ventes</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Découvrez les articles préférés de notre communauté pour une rentrée réussie.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Link 
                key={index} 
                to="/produit/1"
                className="group"
              >
                <div className="relative aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden mb-4">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt={product.name} 
                    src={product.image} 
                  />
                  {product.discount && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                      {product.discount}
                    </div>
                  )}
                  <button className="absolute bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                  </button>
                </div>
                <p className="text-slate-500 text-xs mb-1">{product.brand}</p>
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold text-xl">{product.price} F</span>
                  {product.oldPrice && (
                    <span className="text-slate-400 line-through text-sm">{product.oldPrice} F</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-6">
                <span className="material-symbols-outlined text-4xl">local_shipping</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Livraison Gratuite</h4>
              <p className="text-white/80">Dès 30.000 F CFA d'achats partout.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-6">
                <span className="material-symbols-outlined text-4xl">shield</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Paiement Sécurisé</h4>
              <p className="text-white/80">Transactions cryptées 100% sûres.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-6">
                <span className="material-symbols-outlined text-4xl">support_agent</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Service Client 24/7</h4>
              <p className="text-white/80">Notre équipe vous aide à tout moment.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
