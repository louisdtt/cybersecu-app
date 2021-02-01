# Purpose
Node API allowing to create/read/update/delete music groups and albums details
# Quick start
Run the commands : 

`docker pull dutoitlouis/cybersecu-app`  
`docker run -p 4040:8080  dutoitlouis/cybersecu-app`

The app is now running on http://localhost:4040/
# Test
Import the `tests/API_test.json` in Insomnia/Postman or alike, every API route is called in it
# Analysis
- On utilise [Mongoose](https://www.npmjs.com/package/mongoose) pour gérer la connection avec la BDD.

- Les schemas [Mongoose](https://www.npmjs.com/package/mongoose) utilisés dans le dossier `/models` permettent d'imposer le type des éléments envoyés dans la base de données, cela mitige les injections mais selon le type envoyé il peut aussi être bon d'ajouter une bibliothèque comme [mongo-sanitize](https://www.npmjs.com/package/mongo-sanitize) pour permettre d'échapper tous les caractères d'instructions de MongoDB, pour tester cela on peut simplement essayer d'envoyer des requêtes malveillantes sur des tables de test et observer le résultat.

- Dans `config/db.js` on utilise la bibliothèque [dotenv](https://www.npmjs.com/package/dotenv) pour pouvoir utiliser des variables d'environnements dans un fichier `.env`, cela permet par exemple de stocker l'URI de connexion à la BDD sans le dévoiler, sans cela n'importe qui pourrait s'y connecter, la base étant hébergée, c'est le seul point d'entrée.

- Il n'y a pas de systèmes de gestion de comptes, mais un système comme OAuth 2.0 serait à privilégier pour avoir un bon niveau de sécuritié.

# Security
Attack surface :  

![](./assets/attack_surface.png)  

Schema :  

![](./assets/mermaid.png)  

Objectives : 

Confidentialité : L'accés à la base de données est protégé au travers d'une URL de connexion placé en variable d'environnement (4/5)

Intégrité : Toute personne utilisant l'API a accés à l'intégralité des données et peut donc les modifier et les supprimer (0/5)

Disponiblité : Les données sont stockées en utilisant le service cloud de MongoDB (Atlas), elles sont répliquées sur trois nodes pour assurer une disponibilité maximale (4/5)

Traçabilité : Toute modification apparait dans les logs de MongoDB (5/5)

# Stack
Node.JS with Express.JS and MongoDB
# Author
Louis DUTOIT
