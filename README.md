# Sentinel-Access-Manager
Sentinel Access Manager (SAM) is a secure and scalable authentication system with role-based access control. It features encrypted passwords, JWT-based authentication, and access management for admins, managers, and users. Built with Node.js, Express.js, and MongoDB, SAM ensures efficient and secure user management for web applications.
# VRV Security System

## Description

The VRV Security System is an authentication-based web application designed to manage and secure access for users with different roles (admin, manager, user). It allows users to register, log in, and access secured routes based on their roles. The system uses JWT (JSON Web Tokens) for secure user authentication and authorization. It also leverages middleware for token verification to ensure that only authorized users can access certain routes.

---

## Features
- User registration with hashed passwords.
- Secure login and token generation using JWT.
- Role-based access control (admin, manager, user).
- JWT-based token verification for protected routes.
- Error handling with proper responses.

---

## Tech Stack
- **Backend**: Node.js, Express.js
- **Authentication**: JWT, bcryptjs for password hashing
- **Database**: MongoDB (using Mongoose)
- **Environment variables**: `.env` file for sensitive information like JWT secret

---

## Prerequisites

Before running the project, ensure that the following are installed:

- **Node.js** (version 14 or later)
- **MongoDB** (for local database) or a MongoDB cloud instance (e.g., MongoDB Atlas)
- **npm** (Node package manager)

---

## Getting Started

### 1. Clone the repository or download the ZIP folder
Clone the repository using the following command or download it as a ZIP and extract it:

```bash
git clone https://github.com/your-repository-name.git
2. Install dependencies
Navigate to the project directory and install the required dependencies using npm:

bash
Copy code
npm install
3. Set up environment variables
Create a .env file in the root directory and configure it with the following variables:

plaintext
Copy code
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vrv_security   # or your MongoDB cloud URI
JWT_SECRET=your-jwt-secret-key
4. Run the application
Start the application in development mode using the following command:

bash
Copy code
npm run dev
The server will be available at http://localhost:5000.
