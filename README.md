# 🎨 TREUA - Shopify Premium Theme

Thème Shopify premium interactif avec animations GSAP, curseur personnalisé et esthétique de luxe sombre.

## 📋 Prérequis

- Node.js 16+
- Shopify CLI installé (`npm install -g @shopify/cli @shopify/theme`)
- Un compte Shopify avec accès développeur

## 🚀 Installation Rapide

### 1. Cloner le repository
```bash
git clone https://github.com/MSP833/TREUA.git
cd TREUA
```

### 2. Configurer Shopify CLI
```bash
shopify login --store your-store.myshopify.com
```

### 3. Développement Local
```bash
shopify theme dev
```

Le thème sera accessible à `http://localhost:9292`

### 4. Déployer en Production
```bash
shopify theme push
```

## 📁 Structure du Projet

```
.
├── layout/
│   └── theme.liquid          # Layout principal
├── templates/
│   ├── index.liquid          # Page d'accueil
│   ├── product.liquid        # Page produit
│   └── collection.liquid     # Page collection
├── snippets/
│   ├── header.liquid         # En-tête
│   ├── footer.liquid         # Pied de page
│   ├── preloader.liquid      # Animation de chargement
│   └── product-card.liquid   # Composant carte produit
├── assets/
│   ├── theme.css             # Styles globaux
│   └── theme.js              # JavaScript personnalisé
├── config/
│   └── settings_schema.json  # Paramètres du thème
└── README.md
```

## ✨ Caractéristiques

✅ **Curseur Personnalisé** - Curseur liquide avec aura animée
✅ **Preloader Épique** - Animé avec effet "hacker matrix"
✅ **Animations GSAP** - Transitions fluides et compteurs animés
✅ **Design Réactif** - Optimisé mobile/tablet/desktop
✅ **Thème Sombre Luxe** - Or (#B89742) sur noir (#0D0D0D)
✅ **Film Grain** - Texture cinématique subtile
✅ **Marquees** - Bandes de texte qui défilent
✅ **Produits Asymétriques** - Grille de produits créative

## 🎨 Personnalisation

### Couleurs
Modifiez dans `config/settings_schema.json` :
- `primary_gold` - Couleur or principale
- `primary_black` - Couleur noire principale
- `background_color` - Couleur de fond

### Typographie
Fontes intégrées :
- **Serif** : Cormorant Garamond (titres)
- **Sans-serif** : Montserrat (corps)

## 📦 Dépendances

- Tailwind CSS (via CDN)
- GSAP 3.12.2
- Google Fonts

## ⚙️ Configuration Recommandée

1. Créer une **collection "featured"** pour les produits en vedette
2. Ajouter **au moins 6 produits** avec images de qualité
3. Configurer les **informations d'expédition** via settings_schema

## 📱 Responsive

Le thème est entièrement responsive :
- Breakpoints Tailwind : `sm`, `md`, `lg`, `xl`
- Curseur désactivé sur mobile
- Animations adaptées aux performances

## 🐛 Debugging

```bash
# Voir les logs
shopify theme dev --verbose

# Vérifier la syntaxe Liquid
shopify theme validate
```

## 📞 Support

Pour les problèmes :
1. Vérifiez `console.log` navigateur (F12)
2. Consultez Shopify Admin > Thèmes > Actions
3. Vérifiez la syntaxe Liquid dans `shopify theme dev`

## 📄 Licence

TREUA © 2024
