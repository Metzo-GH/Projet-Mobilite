# 🚗 Application de mobilité à la demande – type Uber pour rendez-vous planifiés

## 🧩 Description du projet

Ce projet est une application mobile de type Uber, conçue pour répondre aux besoins de mobilité des utilisateurs ayant des **rendez-vous planifiés** : médicaux, administratifs, professionnels, etc.

L'application permet aux utilisateurs de réserver une course à l'avance (ou immédiate), de suivre le trajet en temps réel, et d'effectuer un paiement sécurisé.

Elle repose sur trois profils d'utilisateurs principaux :
- **Client** : Réserve et suit ses trajets
- **Chauffeur** : Gère ses courses, accepte les missions
- **Administrateur** : Supervise, assigne les trajets, gère le système

---

## 🚀 Fonctionnalités principales

### Côté client
- Réservation de course immédiate ou planifiée
- Définition d’un trajet aller-retour avec heures précises
- Visualisation du chauffeur et du statut de la course
- Suivi en temps réel sur la carte
- Paiement intégré

### Côté chauffeur
- Acceptation ou refus des courses
- Visualisation du planning
- Suivi des gains et de l’historique

### Côté administrateur
- Gestion des réservations planifiées
- Attribution manuelle ou automatique des courses
- Suivi en temps réel des courses et des chauffeurs
- Statistiques et rapports

---

## 🧱 Architecture technique

| Composant        | Technologie           | Raison du choix                                   |
|------------------|------------------------|----------------------------------------------------|
| Mobile App       | Flutter + Dart         | Un seul code pour Android/iOS, rapide et fluide    |
| Backend/API      | NestJS (Node.js + TS)  | Structure modulaire, maintenabilité, évolutif      |
| Base de données  | PostgreSQL + PostGIS   | SQL robuste + support géo (trajets, positions)     |
| Temps réel       | WebSocket + Redis      | Géolocalisation et statut des trajets instantanés  |
| Authentification | Firebase Auth / Auth0  | Sécurité + rapidité de mise en place               |
| Paiement         | Stripe Connect         | Sécurisé, gestion automatique des reversements     |
| Notifications    | Firebase Cloud Messaging (FCM) | Notifications push efficaces                |
| Infra/CI/CD      | Docker + GitHub Actions + Railway/Fly.io | Déploiement rapide, scalable       |
| Admin Panel      | React + Tailwind / Flutter Web | Interface moderne et réactive               |

---

## 🔁 Cas d’usage typique

> Un utilisateur planifie une course pour aller à l’hôpital mardi à 9h, avec un retour prévu à 11h30.  
> L’administrateur reçoit la demande, attribue un chauffeur. Le jour J, le chauffeur prend la course,  
> le client suit le trajet en temps réel, et paie via l’application.

---

## 📦 Installation (à venir)

### Pré-requis
- Node.js, Docker, Flutter, PostgreSQL, etc.

### Lancer le projet (développement)
```bash
# Backend
cd backend
npm install
npm run start:dev

# Mobile App
cd mobile
flutter pub get
flutter run
