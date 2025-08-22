        Étude de cas / Mini projet pratique

Objectif : Vérifier la capacité du candidat à concevoir et livrer une mini-application end-to-end (front + back + DB).
Cahier des charges
Contexte : R&S TELECOM souhaite tester un système simple de gestion des candidatures.
Backend Django ou au choix :
Implémenter une API REST pour :
    •	Créer un candidat (nom, email, compétences, cv uploadé)
    •	Lister tous les candidats
    •	Rechercher les candidats par compétence
Base de données (MySQL ou PostgreSQL) :
    •	Table candidats : id, nom, email, compétences, cv_url
Frontend Django + TypeScript :
    •	Page affichant la liste des candidats récupérés depuis l’API
    •	Formulaire pour ajouter un nouveau candidat
    •	Filtrage dynamique côté client avec TypeScript
Bonus (non obligatoire mais apprécié) :
    •	Dockeriser l’application (backend + DB)
    •	Typage strict des objets JSON côté front avec TypeScript
Livrables
    •	Code source (GitHub ou archive .zip)
    •	Fichier README.md expliquant :
    •	Comment lancer le projet (API + Frontend)
    •	Exemple de requêtes API (curl ou Postman)
