const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
  {
    sbd: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    toan: {
      type: Number,
      default: null,
    },
    ngu_van: {
      type: Number,
      default: null,
    },
    ngoai_ngu: {
      type: Number,
      default: null,
    },
    vat_li: {
      type: Number,
      default: null,
    },
    hoa_hoc: {
      type: Number,
      default: null,
    },
    sinh_hoc: {
      type: Number,
      default: null,
    },
    lich_su: {
      type: Number,
      default: null,
    },
    dia_li: {
      type: Number,
      default: null,
    },
    gdcd: {
      type: Number,
      default: null,
    },
    ma_ngoai_ngu: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Score", scoreSchema);