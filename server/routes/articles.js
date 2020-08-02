import { Router } from "express";
import Articles from "../models/Articles";
import { ErrorHandler } from "../middlewares/helpers";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const articles = await Articles.find({});
    res.json({ articles });
  } catch (err) {
    res.json(ErrorHandler(err));
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Articles.findById(id);

    res.json({ article });
  } catch (err) {
    res.json(ErrorHandler(err));
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const article = new Articles(data);

    await article.save();

    res.status(201).json({ message: "Article was created" });
  } catch (err) {
    res.json(ErrorHandler(err));
  }
});

router.patch("/", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const article = await Articles.findOneAndUpdate({ _id: id }, { name });

    res.status(201).json({ article });
  } catch (err) {
    res.json(ErrorHandler(err));
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Articles.findByIdAndDelete(id);

    res.status(201).json({ message: "Article was deleted" });
  } catch (err) {
    res.status(500).json(ErrorHandler(err));
  }
});

export default router;
