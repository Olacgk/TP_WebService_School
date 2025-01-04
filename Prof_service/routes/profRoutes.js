const express = require("express");
const {
  getAllProfs,
  createProf,
  getProfById,
  deleteProf,
  updateProf
} = require("../controllers/profController");
const router = express.Router();

router.get("/", getAllProfs);
router.post("/", createProf);
router.get("/:id", getProfById);
router.delete("/:id", deleteProf);
router.patch("/:id", updateProf);

module.exports = router;
