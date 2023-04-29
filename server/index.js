import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// https://helmetjs.github.io/
// Helmet helps you secure your Express apps by setting various HTTP headers.
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client";
import generalRoutes from "./routes/general";
import managementRoutes from "./routes/management";
import salesRoutes from "./routes/sales";

// data imports
import User from "./models/User";
import { dataUser } from "./data/index";

// configuration
dotenv.config();
const app = express();
app.use(express.json);
app.use(helmet());
// to make API calls from another server
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes for each section of dashboard data
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

// Mongoose setup
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    // ONLY ADD DATA ONE TIME
    User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} - did not connect`));
