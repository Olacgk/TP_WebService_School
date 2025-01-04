const Prof = require("../models/profModel");

exports.getAllProfs = async (req, res) => {
  const profs = await Prof.findAll();
  res.json(profs);
};

exports.createProf = async (req, res) => {
  const { name, course } = req.body;
  const newProf = await Prof.create({ name, course });
  res.status(201).json(newProf);
};

exports.getProfById = async (req, res) => {
  const prof = await Prof.findByPk(req.params.id);
  if (!prof) return res.status(404).json({ message: "Prof not found" });
  res.json(prof);
};

exports.deleteProf = async (req, res) => {
  const result = await Prof.destroy({ where: { id: req.params.id } });
  if (!result) return res.status(404).json({ message: "Prof not found" });
  res.status(204).send();
};

exports.updateProf = async (req, res) => {
    const { name, course } = req.body;
    const profId = req.params.id;
  
    try {
      const prof = await Prof.findByPk(profId);
      
      if (!prof) {
        return res.status(404).json({ message: "Prof not found" });
      }
  
      prof.name = name || prof.name;
      prof.course = course || prof.course;
  
      await prof.save();
  
      res.json(prof);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error updating professor", error: error.message });
    }
  };
  