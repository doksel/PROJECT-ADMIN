import { Router } from "express";
import Articles from "../models/Articles";
import { getTokenFromHeader, ErrorHandler } from "../middlewares/helpers";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const articles = await Articles.find({});
    res.json({ articles });
  } catch (err) {
    res.json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Articles.findById(id);

    res.json({ article });
  } catch (err) {
    res.json(err);
  }
});

router.post("/", getTokenFromHeader, async (req, res) => {
  try {
    const data = req.body;
    const userId = req.user.userId;
    const article = new Articles({...data, owner: userId});

    await article.save();

    res.status(201).json({ message: "Article was created" });
  } catch (err) {
    res.json(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const article = await Articles.findOneAndUpdate({ _id: id }, data);

    res.status(201).json({ article });
  } catch (err) {
    res.json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Articles.findByIdAndDelete(id);

    res.status(201).json({ message: "Article was deleted" });
  } catch (err) {
    res.json(err);
  }
});

export default router;
