# Express + Prisma Backend Application

This is a TypeScript-based backend service built with **Express.js** and **Prisma ORM**. It features a PostgreSQL database 

##  Structure

* **`src/`**: Contains the core application logic.
* **`index.ts`**: The entry point of the application where the Express server is initialized.
* **`controller/`**: Contains business logic for handling requests (e.g., `UserController.ts`).
* **`routes/`**: Defines API endpoints and maps them to controllers.


* **`prisma/`**: Database configuration and migration files.
* **`schema.prisma`**: The source of truth for the database schema.
* **`migrations/`**: SQL files tracking changes to the database structure over time.


* **`lib/`**: Contains the Prisma client singleton and database adapter configuration.
* **`generated/prisma/`**: The customized output location for the Prisma Client.

## API Endpoints

### User Routes (`/users`)

* **POST `/**`: Creates a new user with `name` and `email`.
* **GET `/**`: Retrieves all users.

## Setup and Installation

### Prerequisites

* Node.js (refer to `package.json` for engine requirements)
* PostgreSQL database

### Steps

1. **Install Dependencies**:
```bash
npm install

```


2. **Environment Variables**:
Create a `.env` file in the root directory and add your database connection string:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

```


3. **Generate Prisma Client**:
```bash
npx prisma generate

```


4. **Run Migrations**:
```bash
npx prisma migrate dev

```


5. **Start the Server**:
```bash
npm run dev

```


The server will run at `http://localhost:3000`.

## Scripts

* `npm run dev`: Starts the server using `nodemon` and `tsx` for development.
* `test`: Placeholder for running tests.