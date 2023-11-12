import express from "express";
import filerUpload from "express-fileupload";
import { PORT } from "./config.js";
import cors from "cors";
import morgan from "morgan";
import indexrute from "./routes/index.routes.js";
import userRoutes from './routes/user.routes.js'
import loginRoutes from './routes/login.routes.js'
import workerRoutes from './routes/worker.routes.js'
import serviceRoutes from './routes/service.routes.js'

const app = express();

//middlewares
app.use(express.json());
app.use(
  filerUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use(indexrute);
app.use("/user",userRoutes);
app.use("/login",loginRoutes);
app.use("/worker",workerRoutes);
app.use("/service",serviceRoutes);

//Settings
app.set("PORT", PORT);

export default app;
