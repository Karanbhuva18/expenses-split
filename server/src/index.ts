import express from "express";
// import { pool } from "./db.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
