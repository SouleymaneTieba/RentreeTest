import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { useCart } from '../CartContext';
import { formatPrice, products } from '../products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  if (!product) return <main className="min-h-screen bg-background-light p-12 text-center"><h1 className="text-2xl font-bold">Produit introuvable</h1><Link className="text-primary" to="/catalogue">Voir le catalogue</Link></main>;
  const addToCart = () => { addItem(product, quantity); setAdded(true); };
  return <div className="bg-background-light min-h-screen"><main className="max-w-7xl mx-auto px-4 py-8"><nav className="text-sm text-slate-500 mb-6"><Link to="/">Accueil</Link> / <Link to="/catalogue">Catalogue</Link> / {product.name}</nav><div className="grid grid-cols-1 lg:grid-cols-2 gap-12"><div className="bg-white rounded-2xl p-8 border border-slate-200"><img src={product.image} alt={product.name} className="w-full rounded-xl" /></div><div><p className="text-primary font-semibold">{product.category}</p><h1 className="text-3xl font-bold text-slate-900 my-3">{product.name}</h1><div className="flex gap-3 items-center mb-5"><span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>{product.oldPrice && <span className="line-through text-slate-400">{formatPrice(product.oldPrice)}</span>}</div><p className="text-slate-600 mb-6">{product.description}</p><ul className="space-y-2 mb-6 text-slate-600">{['Produit sélectionné avec soin', 'Qualité adaptée à la rentrée', 'Livraison disponible partout'].map((feature) => <li key={feature}>✓ {feature}</li>)}</ul><div className="flex gap-4"><div className="flex border rounded-lg"><button type="button" aria-label="Diminuer la quantité" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4">−</button><span className="px-4 py-2 font-semibold">{quantity}</span><button type="button" aria-label="Augmenter la quantité" onClick={() => setQuantity(quantity + 1)} className="px-4">+</button></div><button type="button" onClick={addToCart} className="flex-1 bg-primary text-white rounded-xl font-bold">{added ? 'Ajouté au panier' : 'Ajouter au panier'}</button></div>{added && <Link to="/panier" className="inline-block mt-4 text-primary font-bold hover:underline">Voir mon panier</Link>}</div></div></main><Footer /></div>;
}
