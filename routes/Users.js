import express from "express";
import { getUsers, SignUp, Login, Logout } from "../controllers/Users.js";
import { VerifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

// router.get("/users", VerifyToken, getUsers);
router.post("/SignUp", SignUp);
router.post("/Login", Login);
router.delete("/Logout", Logout);
router.get("/token", VerifyToken, (req, res) => {
  res.sendStatus(200);
});

export default router;
