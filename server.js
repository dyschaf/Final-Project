import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import dotenv from "dotenv";
import path from "path";
import router from "./routes/Users.js";
// cors();
dotenv.config();
const app = express();
const __dirname = path.resolve();
// app.use(cors());
app.use(cors({ credentials: true, origin: "https://herokuapp.com" }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server run on port ${process.env.PORT || 5000}`)
);

try {
  await db.authenticate();
  console.log("Database connected....");
} catch (e) {
  console.log(e);
}
