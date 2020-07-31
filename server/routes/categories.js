import { Router } from "express";
import Categories from "../models/Categories";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Categories.find({});
    res.json({ categories });
  } catch (err) {
    res.status(500).json({ message: "Error 500", errors: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Categories.findById(id);

    res.json({ category });
  } catch (err) {
    res.status(500).json({ message: "Error 500", errors: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const category = new Categories({ name });

    await category.save();

    res.status(201).json({ message: "Category was created" });
  } catch (err) {
    res.status(500).json({ message: "Error 500", errors: err });
  }
});

router.patch("/:id", async (req, res) => {

  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Categories.findOneAndUpdate(
       {_id: id },
       { name }
    );

    res.status(201).json({ category });
  } catch (err) {
    res.status(500).json({ message: "Error 500", errors: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Categories.findByIdAndDelete(id);

    res.status(201).json({ message: "Category was deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error 500", errors: err });
  }
});

export default router;
