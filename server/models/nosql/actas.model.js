const mongoose = require("mongoose");

const ActasSchema = mongoose.Schema({
  folio: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  tipo: {
    type: String,
    default: "ORDINARIA",
  },
  fecha: {
    type: Date,
  },
  registroSistema: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Actas", ActasSchema);
