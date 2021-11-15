const router = require("express").Router()
const path = require("path")
const apiRoutes = require("./api")
//Creating path to routes
router.use("/api", apiRoutes)
//Get index and write to index
router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);
//Get exercise and write to exercise
router.get("/exercise", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
);
//Get stats and write to stats
router.get("/stats", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/stats.html"))
);

//Export to be available globally
module.exports = router