# CommunionHub React Web App

## About the Project

CommunionHub is a community-driven event listing platform where users can:
- Discover upcoming events based on location, category, and date.
- Filter events by category such as Religious, Social, or Charity.
- Add new events through a form with an image upload feature.

## Features

### Home Page
- Displays a welcome message and app introduction.
- Navigation bar with links to Home, Events, and About.
- Hero section with a title, short description, and Call-to-Action button.

### Event Listing Page
- Displays a list of events including title, date, location, and description.
- Users can filter events by category.
- Simple form to add new events, including an image upload feature.

## Tech Stack

- Frontend: React.js, Tailwind CSS
- Backend & Database: Firebase Firestore
- Image Upload: Firebase Storage

## How to Use

1. Explore Events: Visit the event listing page to view all available events.
2. Filter Events: Use the category filter to find relevant events.
3. Add New Events: Click the "Add Event" button and fill out the form to create an event.

## Prerequisites

Ensure you have:
- Node.js (v16+) installed
- NPM or Yarn installed

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/manjreka/Communion-App.git
   cd Communion-App
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a Firebase configuration file:

   In the `src` directory, create a folder named `firebase`, then inside it, create a file named `config.js` and add the following code:

   ```js
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";
   import { getStorage } from "firebase/storage";

   const firebaseConfig = {
     apiKey: "your_firebase_api_key",
     authDomain: "your_firebase_auth_domain",
     projectId: "your_firebase_project_id",
     storageBucket: "your_firebase_storage_bucket",
     messagingSenderId: "your_firebase_messaging_sender_id",
     appId: "your_firebase_app_id"
   };

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   export const storage = getStorage(app);
   ```

4. Start the development server:

   ```sh
   npm start
   ```
