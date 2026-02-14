import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background-light flex items-center justify-center px-4">
      {/* Back to home link */}
      <Link to="/" className="absolute top-4 left-4 flex items-center gap-2 text-primary font-semibold hover:underline">
        <span className="material-symbols-outlined">arrow_back</span>
        Retour à l'accueil
      </Link>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/">
            <img 
              src="/src/assets/logo_marentreefacile.png" 
              alt="MaRentreeFacile" 
              className="h-16 mx-auto mb-4"
            />
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Connexion</h1>
          <p className="text-slate-500">Connectez-vous à votre compte</p>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="votre@email.com"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Mot de passe</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                <span className="ml-2 text-sm text-slate-600">Se souvenir de moi</span>
              </label>
              <a href="#" className="text-sm text-primary font-semibold hover:underline">Mot de passe oublié?</a>
            </div>
            <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold transition-colors">
              Se connecter
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Pas encore de compte?{' '}
              <Link to="/inscription" className="text-primary font-semibold hover:underline">
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
