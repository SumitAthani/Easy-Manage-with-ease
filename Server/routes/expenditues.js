const express = require("express");
const Expenditure = require("../models/Expenditures");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const check_auth = require("../middlewares/auth");
require("dotenv").config();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Working" });
});

router.post("/addTransactions", check_auth, async (req, res) => {
  console.log(req.body);
  const data = req.body;
  const DaysTransactions = await Expenditure.findOne({
    userId: req.user.userId,
    date: data.date,
  });
  if (!DaysTransactions) {
    const Transactions = await new Expenditure({
      userId: req.user.userId,
      date: data.date,
      transactions: data.transactions,
    });
    await Transactions.save();
    res.status(200).json({ message: "saved" });
  } else {
    const tlength = DaysTransactions.transactions.length;
    data.transactions.forEach((t, i) => {
      t.id = tlength + i;
      DaysTransactions.transactions.push(t);
    });
    await DaysTransactions.save();
    res.status(200).json({ message: "Add saved" });
  }
});

router.get("/getTransactions", check_auth, async (req, res) => {
  const data = await Expenditure.find({
    userId: req.user.userId,
  });
  console.log(data);
  return res.status(200).json(data);
});

module.exports = router;
