const express = require("express");
const listItem = require("../models/ListItem");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Essa é a API do Supermarket List");
});

router.get("/list-item", async (req, res) => {
  try {
    const { username } = req.headers;

    if (!username) {
      res.status(401).json({ error: "Username is required" });
    }

    const items = await listItem.find({
      username,
    });
    return res.json(items);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/list-item", async (req, res) => {
  const { name, quantity, checked } = req.body;
  const { username } = req.headers;

  if (!username) {
    res.status(401).json({ error: "Username is required" });
  }

  if (!name || name.length < 3) {
    return res.status(400).json({
      error: "Name is mandatory and should have more than 3 characters",
    });
  }

  if (!quantity || quantity < 1 || typeof quantity !== "number") {
    return res.status(400).json({
      error: "Quantity is mandatory and should be a number more than zero",
    });
  }

  try {
    const newItem = await listItem.create({
      name,
      quantity,
      checked: checked || false,
      username,
    });
    return res.status(200).json(newItem);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.delete("/list-item/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: "Id is mandatory" });
    }
    const listItemDelete = await listItem.findByIdAndDelete(id);
    return res.status(200).json(listItemDelete);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.put("/list-item/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ error: "Id is mandatory" });
    }

    const { name, quantity, checked } = req.body;

    if (!name || name.length < 3) {
      return res.status(400).json({
        error: "Name is mandatory and should have more than 3 characters",
      });
    }

    if (!quantity || quantity < 1 || typeof quantity !== "number") {
      return res.status(400).json({
        error: "Quantity is mandatory and should be a number more than zero",
      });
    }

    const listItemUpdate = await listItem.findByIdAndUpdate(
      id,
      {
        name,
        quantity,
        checked: checked || false,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(listItemUpdate);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
