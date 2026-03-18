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
1. Clone repo
2. `npm install`
3. `node server.js`
4. Use Postman to test endpoints

## Testing
- Test scripts included in Postman collection
- Automated ID chaining using environment variables
- Validation for required fields
- Response time check

## Tech Stack
- Node.js
- Express.js
- Postman
