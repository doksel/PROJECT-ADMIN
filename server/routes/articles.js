import {Router} from "express";
import Articles from "../models/Articles";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const articles = await Articles.find({});
    res.json({ articles });
  } catch (err) {
    res.status(500).json({ message: "Error 500", errors: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const article = await Articles.findById(id);

    res.json({ article });
  } catch (err) {
    res.status(500).json({ message: "Error 500", errors: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const article = new Articles({ name });

    await article.save();

    res.status(201).json({ message: "Article was created" });
  } catch (err) {
    res.status(500).json({ message: "Error 500", errors: err });
  }
});

router.patch("/", async (req, res) => {
  try {
    const id = req.params.id;
    const { name } = req.body.name;

    const article = await Articles.findOneAndUpdate(
      { id },
      { name },
      { new: true }
    );

    res.status(201).json({ article });
  } catch (err) {
    res.status(500).json({ message: "Error 500", errors: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const article = await Articles.findByIdAndDelete(id);

    res.status(201).json({ message: "Article was deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error 500", errors: err });
  }
});

export default router;
