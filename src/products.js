const image = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIQEWh7B72v3AhC6oJEDy9Mts4tN-e6FfZg9NKkrajIAEotZ9tDMUJmXB5rH0S-TMoz3BMguex2WpZE8OEMuV7lao0IAO6rq_tyZ25BbZEB0FtOKmXPyWqVWmeNwYu5bGian6PtezrY46kYyHfiAeydrwYP0Hhzw7-V3E_FYTG-A5bWrQ0yjiUORNfSJke5NJ1xZva4aMdsU8Isf719BX5omxuh24OXbftHkulZDWBgOygzWq2hHMUlZj0w3aUVIHPZa_dR-sKfuM';

export const products = [
  { id: 1, name: 'Kit Complet CP', category: 'Kits', brand: 'MaRentréeFacile', price: 15000, oldPrice: null, rating: 5, reviews: 24, items: '15 articles inclus', image, discount: 'Populaire', description: 'Un kit complet et pratique pour les élèves de CP.' },
  { id: 2, name: 'Pack Essentiel 6ème', category: 'Kits', brand: 'MaRentréeFacile', price: 25000, oldPrice: null, rating: 4.5, reviews: 18, items: '22 articles inclus', image, discount: null, description: 'Les fournitures essentielles pour une rentrée en 6ème.' },
  { id: 3, name: 'Kit Lycée Terminale', category: 'Kits', brand: 'MaRentréeFacile', price: 32000, oldPrice: 38000, rating: 4.8, reviews: 32, items: '18 articles inclus', image, discount: '-15%', description: 'Un pack adapté aux besoins de la classe de Terminale.' },
  { id: 4, name: 'Sac à dos Ergonomique Bleu', category: 'Maroquinerie', brand: 'Eastpak', price: 29500, oldPrice: null, rating: 4.5, reviews: 42, image, discount: 'Nouveauté', description: 'Sac à dos ergonomique, résistant et confortable.' },
  { id: 5, name: 'Trousse Garnie 30 pièces', category: 'Accessoires', brand: 'Maped', price: 8200, oldPrice: null, rating: 5, reviews: 15, image, discount: null, description: "Trousse complète avec les indispensables de l'écriture." },
  { id: 6, name: 'Cahier Clairefontaine A4', category: 'Papeterie', brand: 'Clairefontaine', price: 1450, oldPrice: 1800, rating: 5, reviews: 128, image, discount: '-20%', description: 'Cahier A4 de qualité pour des notes bien organisées.' },
  { id: 7, name: 'Lot stylos Bic (x50)', category: 'Écriture', brand: 'Bic', price: 4500, oldPrice: null, rating: 4, reviews: 89, image, discount: null, description: 'Lot économique de 50 stylos Bic.' },
  { id: 8, name: 'Compas Maped', category: 'Géométrie', brand: 'Maped', price: 2500, oldPrice: null, rating: 4.5, reviews: 45, image, discount: null, description: 'Compas solide et précis pour les exercices de géométrie.' },
];

export const formatPrice = (price) => `${price.toLocaleString('fr-FR')} F CFA`;
