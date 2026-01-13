import express from "express";
import {
  getAllUsers,
  addUser,
  getUserById,
  editUser,
  removeUser
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:eid", getUserById);
router.post("/", addUser);
router.put("/:uid", editUser);
router.delete("/:delid", removeUser);

export default router;
