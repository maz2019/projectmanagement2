import express from "express";
import helmet from "helmet";

import dotenv from "dotenv";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes";
import bodyParser from "body-parser";
import cors from "cors";

import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
  res.send("This is home route");
});

app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
// app.use("/search", searchRoutes);
app.use("/users", userRoutes);
// app.use("/teams", teamRoutes);

const port = Number(process.env.PORT) || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on part ${port}`);
});
