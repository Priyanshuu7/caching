import express from "express";

import userRoutes from "./routes/UserRoute";



const app = express();
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello Prisma + Express!");
});

// User routes
app.use("/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
