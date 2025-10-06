# Systeme de gestion des employes - Frontend

## Apercu

Le frontend du Systeme de gestion des employes est une application **React** qui fournit une interface utilisateur pour gerer les donnees des employes et des departements. L'application permet d'afficher, d'ajouter, de modifier et de supprimer des employes et des departements. Elle inclut egalement des visualisations pour des indicateurs tels que la croissance des effectifs dans le temps ou la repartition par tranche d'age.

## Structure des fichiers


```
....
```

## Dependances

- **React** : librairie front pour construire l'interface.
- **React Router DOM** : gestion du routage et de la navigation.
- **Material-UI** : composants et styles UI.
- **Chart.js** : generation de graphiques.
- **Axios** : requetes HTTP (si utilise dans `employeeService` et `departmentService`).
- **Tailwind CSS** : framework CSS orienter utilitaires (si exploite dans `App.css`).



## Focus sur quelques composants

### `Dashboard.js`

Affiche differents indicateurs sur les employes : total, age moyen, evolution dans le temps, repartition par tranche d'age. Utilise `react-chartjs-2` pour les graphiques en barres.

### `EmployeeList.js`

Liste des employes avec recherche, pagination et suppression. Contient des liens pour ajouter un nouvel employe et modifier un employe existant.

### `EmployeeForm.js`

Formulaire d'ajout ou de modification d'un employe. Recupere les departements pour alimenter la liste deroulante. S'appuie sur `useParams` pour distinguer les modes ajout et edition.

### `DepartmentList.js`

Liste des departements avec recherche, pagination et suppression. Contient des liens pour ajouter et modifier un departement.

### `DepartmentForm.js`

Formulaire pour ajouter ou editer un departement.

### `Navbar.js`

Barre de navigation avec liens vers le dashboard, les employes et les departements. Met en avant la page active.
