# Experiment 6 – JWT Authentication Backend

**Student Name:** B. Sri Manikanta
**UID:** 23BAI70506

---

## Overview

This project demonstrates the implementation of **JWT (JSON Web Token) based authentication** using **Node.js and Express.js**.
The backend system validates user credentials, generates a secure authentication token, and protects specific API routes using middleware verification.

JWT authentication ensures secure communication between the client and server without maintaining server-side sessions.

---

## JWT Authentication Workflow

1. The client sends login credentials to the **/login API endpoint**.
2. The server verifies the credentials using **bcrypt password comparison**.
3. If authentication is successful, a **JWT token** is generated.
4. The token is sent back to the client.
5. The client includes the token in the **Authorization header** when accessing protected routes.
6. Middleware verifies the token before granting access.

---

## Technology Stack

* Node.js
* Express.js
* JSON Web Token (jsonwebtoken)
* bcrypt (Password hashing)
* dotenv (Environment variables)
* cors
* morgan
* pnpm

---

## Project Structure

```
exp6
│
├── src
│   ├── controllers
│   │     └── authController.js
│   │
│   ├── middleware
│   │     ├── authMiddleware.js
│   │     └── errorMiddleware.js
│   │
│   ├── models
│   │     └── userStore.js
│   │
│   ├── routes
│   │     └── authRoutes.js
│   │
│   ├── utils
│   │     └── tokenUtil.js
│   │
│   └── app.js
│
├── server.js
├── .env
├── screenshots
│   ├── login-success.png
│   ├── token-response.png
│   └── protected-route.png
└── README.md
```

---

## Environment Variables

Create a `.env` file in the root folder:

```
PORT=5000
JWT_SECRET=mySuperSecureSecretKey
TOKEN_EXPIRY=1h
```

---

## API Endpoints

### 1️⃣ Login API

**POST**

```
http://localhost:5000/api/auth/login
```

Request Body:

```
{
 "username": "manikanta",
 "password": "secure123"
}
```

Response:

```
{
 "message": "Login successful",
 "token": "JWT_TOKEN"
}
```

---

### 2️⃣ Protected Route

**GET**

```
http://localhost:5000/api/auth/protected
```

Header:

```
Authorization: Bearer <JWT_TOKEN>
```

Response:

```
{
 "message": "Protected route accessed",
 "user": {
   "userId": 1,
   "username": "manikanta"
 }
}
```

---

## Running the Project

Install dependencies:

```
pnpm install
```

Start the server:

```
pnpm dev
```

Server runs on:

```
http://localhost:5000
```

---

## Testing Using Postman

1. Send **POST /api/auth/login** with username and password.
2. Copy the generated **JWT token**.
3. Send **GET /api/auth/protected** with the Authorization header.
4. Verify the protected response.

---

## Screenshots

Login Response
Token Generated
Protected Route Access

---

## Conclusion

This experiment successfully demonstrates the implementation of **JWT authentication in a Node.js backend**.
The system securely validates users and protects routes using token-based authentication without maintaining server sessions.
