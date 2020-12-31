# Purpose
Node API allowing to create/read/update/delete music groups and albums details
# Quick start
Run the commands : 

`docker pull dutoitlouis/cybersecu-app`  
`docker run -p 4040:8080  dutoitlouis/cybersecu-app`

The app is now running on http://localhost:4040/
# Test
Import the `API_test.json` in Insomnia/Postman or alike, every API route is called in it
# Security
Attack surface :  

![](./assets/attack_surface.png)  

Schema :  

![](./assets/mermaid.png)  

Objectives : 

Confidentialité : L'accés à la base de données est protégé au travers d'une URL de connexion placé en variable d'environnement

Intégrité : Toute personne utilisant l'API a accés à l'intégralité des données et peut donc les modifier et les supprimer

Disponiblité : Les données sont stockées en utilisant le service cloud de MongoDB (Atlas), elles sont répliquées sur trois nodes pour assurer une disponibilité maximale

Traçabilité : Toute modification apparait dans les logs de MongoDB

# Stack
Node.JS with Express.JS and MongoDB
# Author
Louis DUTOIT
