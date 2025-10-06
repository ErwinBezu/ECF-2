# Architecture de l'Application Employee Management System

## Vue d'ensemble

Application full-stack de gestion d'employés utilisant une architecture microservices conteneurisée avec Docker.

## Composants Principaux

### 1. Frontend (React + Material-UI)
- **Technologie** : React 18, Material-UI
- **Port** : 3000
- **Serveur** : Nginx (production)
- **Fonctionnalités** :
    - Liste des employés avec pagination et recherche
    - Formulaire d'ajout/modification d'employé
    - Gestion d'authentification (localStorage)
    - Interface responsive

### 2. Backend (Spring Boot)
- **Technologie** : Spring Boot 2.x, Java 11
- **Port** : 8085 (externe), 8080 (interne)
- **Fonctionnalités** :
    - API REST pour la gestion des employés
    - Connexion à MySQL (données relationnelles)
    - Connexion à MongoDB (données documentaires)
    - Validation des données

### 3. Base de données MySQL
- **Version** : 8.0
- **Port** : 3307 (externe), 3306 (interne)
- **Usage** : Stockage des données structurées (employés, départements)
- **Base** : employee_management

### 4. Base de données MongoDB
- **Version** : 6.0
- **Port** : 27018 (externe), 27017 (interne)
- **Usage** : Stockage de documents non structurés
- **Base** : employee_management

## Choix Techniques

### Conteneurisation avec Docker

**Pourquoi Docker ?**
- Isolation des environnements
- Reproductibilité (même environnement en dev/prod)
- Facilité de déploiement
- Gestion des dépendances simplifiée

**Docker Compose** : Orchestration de 4 conteneurs avec gestion des dépendances et healthchecks

### Multi-stage builds

**Frontend et Backend** utilisent des builds multi-étapes :
- **Stage 1** : Build de l'application (compilation)
- **Stage 2** : Image légère pour l'exécution

**Avantages** :
- Images finales plus petites
- Séparation build/runtime
- Sécurité accrue (pas d'outils de build en production)

### Gestion des ports

Ports externes modifiés pour éviter les conflits avec services locaux :
- MySQL : 3307 (au lieu de 3306)
- MongoDB : 27018 (au lieu de 27017)

Les conteneurs communiquent entre eux via les ports internes standards.

### Healthchecks

Chaque service a un healthcheck pour garantir le démarrage dans le bon ordre :
1. MySQL et MongoDB démarrent.
2. Backend attend que les BDD soient "healthy"
3. Frontend démarre après le backend.

### Développement
```bash
docker-compose up