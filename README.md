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

## Installation and Setup

### 1. Clone the Repository
Clone the project repository to your local machine:

git clone https://github.com/PranavRajS07/Sentinel-Access-Manager

### 2. Install dependencies
Navigate to the project directory and install the required dependencies using npm:

npm install

**3. Set up environment variables**
Create a .env file in the root directory and configure it 
---

**4. Run the application**
Start the application in development mode using the following command:

npm run dev
---
The server will be available at http://localhost:5000.
