import { Router } from "express";

import { getTokenFromHeader, ErrorHandler } from "../middlewares/helpers";

import User from "../models/User";

const router = Router();

router.get("/", getTokenFromHeader, async (req, res) => {
  try {
    const userId = req.user.userId;
    const AllUsers = await User.find({});
    const users = AllUsers.filter((user) => user.id !== userId);

    res.json({ users });
  } catch (err) {
    res.json(ErrorHandler(err));
  }
});

router.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    res.json({ user });
  } catch (err) {
    res.json(ErrorHandler(err));
  }
});

router.get("/account", getTokenFromHeader, async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    res.json({ user });
  } catch (err) {
    res.json(ErrorHandler(err));
  }
});

export default router;
