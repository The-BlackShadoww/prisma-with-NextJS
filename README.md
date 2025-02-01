# Project Documentation

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Create Pin](#create-pin)
  - [Update Pin](#update-pin)
- [Database](#database)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a web application built with Next.js and Prisma. It includes features for creating, updating, and managing pins.

## Project Structure

.env .gitignore .next/ app/ \_components/ actions/ api/ pin/ create/ route.ts route.ts globals.css layout.tsx page.tsx eslint.config.mjs lib/ db.ts next-env.d.ts next.config.ts package.json postcss.config.mjs prisma/ schema.prisma public/ README.md tailwind.config.ts tsconfig.json

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/yourproject.git
   ```
2. Navigate to the project directory:

```sh
 cd yourproject
```

2. Install the dependencies:

```sh
npm install
```
Usage
1. Start the development server:
```sh
npm run dev
```
2. Open your browser and navigate to http://localhost:3000.

API Endpoints
Create Pin
URL: /api/pin/create
Method: POST
Request Body:

{
  "title": "string",
  "description": "string",
  "type": "string",
  "content": "string"
}
Response: 
{
  "id": "string",
  "title": "string",
  "description": "string",
  "type": "string",
  "content": "string",
  "createdAt": "string",
  "updatedAt": "string"
}

Update Pin

{
  "id": "string",
  "title": "string",
  "description": "string",
  "type": "string",
  "content": "string",
  "createdAt": "string",
  "updatedAt": "string"
}

Response:

{
  "id": "string",
  "title": "string",
  "description": "string",
  "type": "string",
  "content": "string",
  "createdAt": "string",
  "updatedAt": "string"
}

Database
This project uses Prisma as the ORM. The database schema is defined in schema.prisma.

Environment Variables
Create a .env file in the root directory and add the following environment variables:

DATABASE_URL=your-database-url

Scripts
npm run dev: Starts the development server.
npm run build: Builds the project for production.
npm run start: Starts the production server.
npm run lint: Runs ESLint to check for linting errors.
Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
This project is licensed under the MIT License. ```
