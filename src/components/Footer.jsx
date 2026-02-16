import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg lg:text-xl font-bold text-primary mb-3 lg:mb-4">MaRentreeFacile</h3>
            <p className="text-slate-400 text-sm lg:text-base">Tout le nécessaire scolaire pour la rentrée, livré directement chez vous.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 lg:mb-4 text-sm lg:text-base">Liens Rapides</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/kits" className="hover:text-primary transition-colors">Kits Scolaires</Link></li>
              <li><Link to="/catalogue" className="hover:text-primary transition-colors">Catalogue</Link></li>
              <li><Link to="/connexion" className="hover:text-primary transition-colors">Mon Compte</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3 lg:mb-4 text-sm lg:text-base">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>contact@marentreefacile.com</li>
              <li>+225 07 00 00 00 00</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold mb-3 lg:mb-4 text-sm lg:text-base">Newsletter</h4>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 px-3 lg:px-4 py-2 rounded-lg sm:rounded-l-lg bg-slate-800 border border-slate-700 text-sm"
              />
              <button className="bg-primary px-4 py-2 rounded-lg sm:rounded-l-none font-bold text-sm hover:bg-primary/90 transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center text-slate-400 text-xs lg:text-sm">
          © 2026 MaRentreeFacile. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
