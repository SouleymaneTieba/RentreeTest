import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              alt="MaRentreeFacile Logo" 
              className="h-12 w-auto" 
              src="/src/assets/logo_marentreefacile.png"
            />
          </Link>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold hover:text-primary transition-colors">Accueil</Link>
            <Link to="/kits" className="text-sm font-semibold hover:text-primary transition-colors">Kits Scolaires</Link>
            <Link to="/catalogue" className="text-sm font-semibold hover:text-primary transition-colors">Fournitures</Link>
          </nav>
          
          {/* Search */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative group">
              <input 
                className="w-full h-11 pl-12 pr-4 bg-primary/5 border-none rounded-full focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-400" 
                placeholder="Rechercher un cartable, des stylos..." 
                type="text"
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">search</span>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link to="/panier" className="p-2.5 rounded-full hover:bg-primary/10 transition-colors relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute top-1 right-1 bg-primary text-white text-[10px] font-bold px-1.5 rounded-full">0</span>
            </Link>
            <Link to="/connexion" className="p-2.5 rounded-full hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">person</span>
            </Link>
            <button className="md:hidden p-2.5 rounded-full hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
