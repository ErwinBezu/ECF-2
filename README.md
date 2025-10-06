# ECF – Mise en œuvre de l'application de gestion des employés

## Contexte pédagogique
Vous intervenez en tant qu'intégratrice ou intégrateur front-end au sein d'une équipe full stack. L'application de gestion des employés est déjà amorcée : le backend Spring Boot et une partie des outils d'industrialisation sont présents, mais plusieurs éléments critiques restent à finaliser. Cet ECF vise à évaluer votre capacité à comprendre un projet existant, à produire une interface fidèle à une maquette fournie, et à industrialiser le tout avec Docker.

## Ressources à disposition
- Répertoire de code contenant les bases du frontend React et du backend Spring Boot.
- Jeux de tests déjà présents côté frontend et backend.
- Maquette de la gestion des employés à reproduire : `img/employees-page.png` (ainsi que `img/add-employee.png`, `img/edit-employee.png` pour les états associés et le reste du dossier `img` au besoin).
- Fichiers `docker-compose.yml` et structures de dossiers préexistants à compléter.

## Objectifs pédagogiques
- Analyser rapidement une architecture full stack existante sans documentation détaillée fournie.
- Réaliser la partie front de gestion des employés à partir de la maquette imposée.
- Finaliser la containerisation de l'application.
- Maîtriser l'exécution des suites de tests front et back (Options).

## Travail attendu
1. **Interface frontend**
   - Implémenter la ou les vues de gestion des employés (liste, formulaire d'ajout/édition, navigation associée) en respectant l'ergonomie et les variantes responsive visibles sur `img/employees-page.png`, `img/add-employee.png` et `img/edit-employee.png`.
   - Respecter le design system observable dans les captures fournies (typos, espaces, palette de couleurs, composants réutilisables) et ne pas produire de dashboard générique hors périmètre.
2. **Containerisation**
   - Compléter le fichier `docker-compose.yml` pour orchestrer l'application complète (frontend, backend, bases de données nécessaires, reverse proxy si pertinent).
   - Créer les `Dockerfile` manquants pour que chaque service puisse être construit et lancé via Docker.
3. **Industrialisation et tests (Options)**
   - Être en mesure d'exécuter les tests existants dans les sous-projets frontend et backend.
4. **Restitution d'architecture**
   - Rédiger un document séparé (ex. `docs/architecture.md`) qui synthétise votre compréhension de l'architecture applicative et des choix techniques. 

## Modalités de rendu
- Dépôt Git accessible.
- README mis à jour (ce fichier) servant d'énoncé officiel pour l'ECF.

## Conseils
- Commencez par prendre en main l'existant : inventaire des scripts `package.json`, des modules Maven, et des services déjà déclarés dans `docker-compose.yml`.
- Définissez vos composants React à partir de la maquette avant d'implémenter la logique métier.


Bon courage !
