# DriveMerge

DriveMerge is a cloud storage management platform that enables users to connect multiple Google Drive accounts, manage their files, and efficiently utilize their combined storage. The project is being developed in two phases to progressively enhance its functionality and security.

---

## Overview

The main goal of **DriveMerge** is to overcome Google Drive’s individual storage limitations by allowing users to merge storage space across multiple Google accounts. Users can log in with multiple accounts, upload files, and seamlessly manage their data through a single unified interface.

---

## Project Phases

### **Phase 1: Core Integration and File Management**

* Implemented login with Google Drive through OAuth authentication.
* Users can connect multiple Google accounts to the application.
* Integrated Google Drive API to:

  * View connected drives’ total and used storage.
  * Upload files to Google Drive.
* Currently, files are uploaded to the **first connected account**.
* The app is in **test mode** in Google Cloud Platform — meaning only developer-approved accounts can connect.

  * This limitation exists because the app handles sensitive Drive access, and verification from Google is required before public release.

---

### **Phase 2: Advanced Upload and Storage Optimization**

* When a file exceeds the storage capacity of the first connected Drive:

  * It will be **automatically segmented into chunks**.
  * Each chunk will be uploaded to different connected accounts.
* A **centralized database** will track all file chunks, their locations, and associated account details.
* When a user downloads or views a file:

  * The backend will **merge all chunks** and send the complete file to the frontend.
* Future enhancements will include:

  * **Data encryption** for all communication between frontend and backend.
  * **Encrypted storage** of access tokens and passwords in the database.
  * **UI animation** to visually represent the file segmentation and upload process.

---

## Technology Stack

### **Frontend**

* **React.js** with **TypeScript**
* Provides a clean and responsive user interface for account management and file uploads.

### **Backend**

* **Node.js** with **Express.js**
* Handles Google Drive API integration, file segmentation logic, and user authentication.

### **Database**

* **MySQL** for relational data storage.
* **Prisma ORM** for schema management and efficient database interaction.

---

## Current Limitations

* The application is currently in **Google Cloud test mode**, so only developer-approved users can log in with Google Drive.
* File uploads currently target the first connected Drive. Multi-account segmentation will be available in the next phase.

---

## Future Enhancements

* Full-scale **Google verification** for public access.
* **End-to-end encryption** for enhanced data security.
* **Visual animations** showing real-time segmentation and upload progress.
* Optimized **merge and download** operations for large files.

---

## Contributors

* **Charan Adithya – 230075**
* **Vivekananda – 230077**
* **Aditya Kammati – 230145**

---

