const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpendituresSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  transactions: [],
});

module.exports = mongoose.model("Expenditures", ExpendituresSchema);
