import express from "express";
import { SignUp, Login, Logout, Search, Phone } from "../controllers/Users.js";
import { VerifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

// router.get("/users", VerifyToken, getUsers);
router.get("/search/:search", Search);
router.get("/device/:detail", Phone);
router.post("/Login", Login);
router.post("/SignUp", SignUp);
router.post("/Logout", Logout);
router.get("/token", VerifyToken, (req, res) => {
  res.sendStatus(200);
});

export default router;
