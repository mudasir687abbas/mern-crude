import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import crudRoute from "./routes/crudRoute.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json()); 

app.use("/api/users", crudRoute);
app.use(errorHandler);

export default app;

// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });
