const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3333;

const connectMongoDatabase = async () => {
  await mongoose.connect("mongodb://localhost:27017");
};

const listItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  checked: Boolean,
});

const listItem = mongoose.model("list_item", listItemSchema);

app.get("/", (req, res) => {
  res.send("oi");
});

app.get("/list-items", async (req, res) => {
  const items = await listItem.find();
  return res.json(items);
});

app.listen(port, () => {
  connectMongoDatabase().catch((error) => {
    console.log(`Error connecting database: ${error}`);
  });
  console.log("App is running at port 3333");
});
