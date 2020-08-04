import { Router } from "express";
import Categories from "../models/Categories";
import { ErrorHandler } from "../middlewares/helpers";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Categories.find({});
    res.json({ categories });
  } catch (err) {
    res.json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Categories.findById(id);

    res.json({ category });
  } catch (err) {
    res.json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const category = new Categories(data);

    await category.save();

    res.status(201).json({ message: "Category was created" });
  } catch (err) {
    res.json(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const category = await Categories.findOneAndUpdate({ _id: id }, data);

    res.status(201).json({ category });
  } catch (err) {
    res.json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Categories.findByIdAndDelete(id);

    res.status(201).json({ message: "Category was deleted" });
  } catch (err) {
    res.json(err);
  }
});

export default router;
