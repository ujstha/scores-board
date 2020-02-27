const mongoose = require("mongoose");
const joi = require("joi");

const scoreSchema = new mongoose.Schema({
  player: { type: String },
  score: { type: Number },
  updatedDate: { type: Date, default: Date.now }
});

function schemaValidator(validData) {
  schema = {
    player: joi.string().required(),
    score: joi.number().required()
  };
  return joi.validate(validData, schema);
}

const Scores = mongoose.model("scoreBoard", scoreSchema);

module.exports = {
  schemaValidator,
  scoreSchema,
  Scores
};
