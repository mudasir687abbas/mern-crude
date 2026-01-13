import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import crudRoute from "./routes/crudRoute.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json()); 

app.use("/api/users", crudRoute);
app.use(errorHandler);


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
