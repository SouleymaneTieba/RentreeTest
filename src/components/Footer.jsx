import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">MaRentreeFacile</h3>
            <p className="text-slate-400">Tout le nécessaire scolaire pour la rentrée, livré directement chez vous.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to="/" className="hover:text-primary">Accueil</Link></li>
              <li><Link to="/catalogue" className="hover:text-primary">Catalogue</Link></li>
              <li><Link to="/connexion" className="hover:text-primary">Mon Compte</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>contact@marentreefacile.com</li>
              <li>+225 07 00 00 00 00</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <div className="flex">
              <input type="email" placeholder="Votre email" className="flex-1 px-4 py-2 rounded-l-lg bg-slate-800 border border-slate-700" />
              <button className="bg-primary px-4 py-2 rounded-r-lg font-bold">OK</button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          © 2026 MaRentreeFacile. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
