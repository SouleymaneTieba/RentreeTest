import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background-light flex flex-col">
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-primary/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img 
                alt="MaRentreeFacile Logo" 
                className="h-10 w-auto object-contain" 
                src="/src/assets/logo_marentreefacile.png"
              />
            </div>
            <div className="flex items-center gap-4">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Accueil
              </Link>
              <a href="#" className="hidden sm:block text-sm font-medium bg-primary/10 text-primary px-4 py-2 rounded-lg hover:bg-primary/20 transition-colors">
                Aide
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-[500px] space-y-8">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Prêt pour la rentrée ?</h1>
            <p className="text-slate-600">Créez votre compte pour simplifier vos fournitures scolaires.</p>
          </div>

          {/* Registration Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-primary/5">
            <form action="#" className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700" htmlFor="full-name">Nom complet</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl">person</span>
                  <input 
                    className="w-full pl-10 rounded-lg border border-slate-200 bg-background-light h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary" 
                    id="full-name" 
                    name="full-name" 
                    placeholder="Jean Dupont" 
                    type="text"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-700" htmlFor="email">Adresse e-mail</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl">mail</span>
                  <input 
                    className="w-full pl-10 rounded-lg border border-slate-200 bg-background-light h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary" 
                    id="email" 
                    name="email" 
                    placeholder="exemple@email.com" 
                    type="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700" htmlFor="password">Mot de passe</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl">lock</span>
                    <input 
                      className="w-full pl-10 rounded-lg border border-slate-200 bg-background-light h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary" 
                      id="password" 
                      name="password" 
                      placeholder="••••••••" 
                      type="password"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700" htmlFor="confirm-password">Confirmation</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl">lock_reset</span>
                    <input 
                      className="w-full pl-10 rounded-lg border border-slate-200 bg-background-light h-12 px-4 focus:ring-2 focus:ring-primary focus:border-primary" 
                      id="confirm-password" 
                      name="confirm-password" 
                      placeholder="••••••••" 
                      type="password"
                    />
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="flex items-start gap-3 py-2">
                <div className="flex items-center">
                  <input 
                    className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary" 
                    id="newsletter" 
                    name="newsletter" 
                    type="checkbox"
                  />
                </div>
                <div className="text-sm">
                  <label className="font-medium text-slate-600" htmlFor="newsletter">
                    Je souhaite recevoir des offres et conseils pour la rentrée.
                  </label>
                </div>
              </div>

              {/* CTA Button */}
              <button 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md flex items-center justify-center gap-2" 
                type="submit"
              >
                <span>Créer mon compte</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </form>

            {/* Redirect to Login */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <p className="text-sm text-slate-600">
                Déjà un compte ? 
                <Link to="/connexion" className="font-bold text-primary hover:text-primary/80 hover:underline ml-1">
                  Se connecter
                </Link>
              </p>
            </div>
          </div>

          {/* Trust Icons */}
          <div className="flex justify-center items-center gap-8 opacity-70 text-secondary-green">
            <span className="material-symbols-outlined text-3xl">school</span>
            <span className="material-symbols-outlined text-3xl">verified</span>
            <span className="material-symbols-outlined text-3xl">local_library</span>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-8 px-4 border-t border-primary/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© 2026 MaRentreeFacile. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors" href="#">Mentions légales</a>
            <a className="hover:text-primary transition-colors" href="#">Confidentialité</a>
            <a className="hover:text-primary transition-colors" href="#">CGU</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
