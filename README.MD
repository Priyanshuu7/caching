Here is the fixed version of the `README.md` file you provided, with the formatting corrected and the broken lists repaired:

```markdown
# Express Caching 

A high-performance Express.js API demonstrating the integration of **Prisma ORM** with **PostgreSQL** and **Redis** for efficient data fetching and caching.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd caching

```

2. **Install dependencies:**
```bash
npm install

```


3. **Configure Environment Variables:**
Create a `.env` file in the root directory (refer to `.gitignore`) and add your connection strings:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
REDIS_HOST="127.0.0.1"
REDIS_PORT=6379

```


4. **Run Database Migrations:**
```bash
npx prisma migrate dev

```



## Running the App

* **Development Mode** (with nodemon and tsx):
```bash
npm run dev

```



The server will start at `http://localhost:3000`.

## API Endpoints

### User Routes (`/users`)

* `POST /create`: Create a new user.
* `GET /fetch`: Retrieve all users.

### Post Routes (`/posts`)

* `POST /create`: Create a new post. Automatically invalidates the `posts:all` cache.
* `GET /fetch`: Retrieve all posts.
* **Caching Logic**: Checks Redis first. If not found, fetches from DB and caches for 60 seconds.

```

```