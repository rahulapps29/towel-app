const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 4032;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// Variable to store the selected floor
let selectedFloor = null;

// Routes
app.get("/", (req, res) => {
  res.render("index", { selectedFloor });
});

app.post("/submit", (req, res) => {
  selectedFloor = req.body.floor; // Save the selected floor
  res.redirect("/"); // Redirect back to the form
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
