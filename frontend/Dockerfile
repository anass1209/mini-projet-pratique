# Utiliser l'image Node.js officielle
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port 5173 (port par défaut de Vite)
EXPOSE 5173

# Commande par défaut
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]