# User API Testing Project

## Overview
A complete REST API project with CRUD operations, tested using Postman. This project demonstrates:
- API development (Node.js + Express)
- Full CRUD operations
- Advanced Postman testing
- Environment variables and test scripts
- Error handling and validation

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| /users | GET | Get all users |
| /users/:id | GET | Get user by ID |
| /users | POST | Create new user |
| /users/:id | PUT | Update existing user |
| /users/:id | DELETE | Delete user |

## How to Run

### 1. Create Project Folder
- Open terminal / command prompt  
- Run:
```bash
mkdir api-testing-project
cd api-testing-project
npm init -y
npm install express
notepad server.js
node server.js

### **2. Check server is running in browser:**
http://localhost:3000/users

### 3. Run in postman
Use "User API Testing Project.postman_collection.json" file

### 4. Run in newman (optional)
npm install -g newman
newman run <your-collection-file>.json

## Testing
- Test scripts included in Postman collection
- Automated ID chaining using environment variables
- Validation for required fields
- Response time check

## Tech Stack
- Node.js
- Express.js
- Postman
