# Étape 1 : Utiliser une image de base officielle Node.js légère (Alpine)
FROM node:18-alpine

# Étape 2 : Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Étape 3 : Copier les fichiers de l'application dans le conteneur
COPY package*.json ./

# Étape 4 : Installer les dépendances de l'application
RUN npm install --production

# Étape 5 : Copier le reste des fichiers de l'application
COPY . .

# Étape 6 : Exposer le port que l'application va utiliser
EXPOSE 5000

# Étape 7 : Lancer l'application Node.js
CMD ["npm", "start"]
