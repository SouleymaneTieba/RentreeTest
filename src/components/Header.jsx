import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20 gap-2 lg:gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              alt="MaRentreeFacile Logo" 
              className="h-10 lg:h-12 w-auto" 
              src="/src/assets/logo_marentreefacile.png"
            />
          </Link>
          
          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/" className="text-sm font-semibold hover:text-primary transition-colors">Accueil</Link>
            <Link to="/kits" className="text-sm font-semibold hover:text-primary transition-colors">Kits Scolaires</Link>
            <Link to="/catalogue" className="text-sm font-semibold hover:text-primary transition-colors">Fournitures</Link>
          </nav>
          
          {/* Search - Desktop/Tablet */}
          <div className="flex-1 max-w-xs lg:max-w-md hidden md:block px-2 lg:px-0">
            <div className="relative group">
              <input 
                className="w-full h-10 lg:h-11 pl-10 lg:pl-12 pr-3 lg:pr-4 bg-primary/5 border-none rounded-full focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-400 text-sm" 
                placeholder="Rechercher..." 
                type="text"
              />
              <span className="material-symbols-outlined absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors text-xl">search</span>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-1 lg:gap-3">
            <Link to="/panier" className="p-2 lg:p-2.5 rounded-full hover:bg-primary/10 transition-colors relative">
              <span className="material-symbols-outlined text-xl lg:text-2xl">shopping_cart</span>
              <span className="absolute top-0.5 lg:top-1 right-0.5 lg:right-1 bg-primary text-white text-[9px] lg:text-[10px] font-bold px-1 rounded-full">0</span>
            </Link>
            <Link to="/connexion" className="p-2 lg:p-2.5 rounded-full hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined text-xl lg:text-2xl">person</span>
            </Link>
            {/* Mobile Menu Button */}
            <button 
              className="p-2 lg:p-2.5 rounded-full hover:bg-primary/10 transition-colors md:block lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-xl lg:text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary/10 bg-white">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile Search */}
            <div className="relative">
              <input 
                className="w-full h-11 pl-12 pr-4 bg-primary/5 border-none rounded-full focus:ring-2 focus:ring-primary transition-all placeholder:text-slate-400" 
                placeholder="Rechercher..." 
                type="text"
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">search</span>
            </div>
            
            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-2">
              <Link 
                to="/" 
                className="px-4 py-2 rounded-lg hover:bg-primary/10 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link 
                to="/kits" 
                className="px-4 py-2 rounded-lg hover:bg-primary/10 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kits Scolaires
              </Link>
              <Link 
                to="/catalogue" 
                className="px-4 py-2 rounded-lg hover:bg-primary/10 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fournitures
              </Link>
              <Link 
                to="/connexion" 
                className="px-4 py-2 rounded-lg hover:bg-primary/10 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mon Compte
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
