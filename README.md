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
# Stack
Node.JS with Express.JS and MongoDB
# Author
Louis DUTOIT
