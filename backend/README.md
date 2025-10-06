# Systeme de gestion des employes - Backend

## Apercu

Le backend du Systeme de gestion des employes est developpe avec Spring Boot, un framework Java concu pour simplifier la creation d'applications prêtes pour la production. Il expose une API RESTful permettant de gerer les donnees des employes et des departements et se connecte a des bases MySQL et MongoDB.

## Fonctionnalites

- **API RESTful** : points de terminaison pour les operations CRUD sur les employes et les departements.
- **Initialisation des donnees** : exemples de departements et d'employes fournis.
- **Integration** : connexion simultanee a MySQL et MongoDB.
- **Gestion des exceptions** : traitement specifique pour les ressources introuvables.

## Technologies

- **Spring Boot** : framework pour construire des applications de production en Java.
- **MySQL** : base de donnees relationnelle pour les donnees structurees.
- **MongoDB** : base de donnees NoSQL pour le stockage non relationnel.

## Structure des fichiers

```
....
```



## Description de fichiers clefs

### `EmployeeManagementApplication.java`

Point d'entree principal de l'application Spring Boot.

### `DepartmentController.java` et `EmployeeController.java`

Controllers REST gerant respectivement les requetes liees aux departements et aux employes.

### `Department.java` et `Employee.java`

Entites representant les tables `departments` et `employees` de la base MySQL.

### `DepartmentRepository.java` et `EmployeeRepository.java`

Interfaces de repository pour effectuer les operations CRUD sur les entites.

### `DataInitializer.java`

Service qui initialise la base avec des donnees d'exemple au demarrage.

### `ResourceNotFoundException.java`

Exception personnalisee declenchee lorsque la ressource demandee est absente.

### `application.properties`

Fichier de configuration Spring Boot incluant les parametres de connexion aux bases.

### `data.sql`

Script SQL pour precharger des donnees dans MySQL.
