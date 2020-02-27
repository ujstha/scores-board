const experss = require("express");
const router = experss.Router();
const { schemaValidator, Scores } = require("../models/scores");

//fetching data
router.get("/", async (req, res) => {
  return await Scores.find().exec(function(err, scores) {
    if (err) {
      res.status(500).json(err);
      return;
    }
    res.status(200).json(scores);
  });
});

router.get("/:id", async (req, res) => {
  const score = await Scores.findOne({
    _id: req.params.id
  });

  res.status(200).send(score);
});

//adding data
router.post("/", (req, res) => {
  const { error } = schemaValidator(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const scores = new Scores(req.body);

  scores.save().then(score =>
    res.json({
      scores: score,
      msg: `Score added successfully.`
    })
  );
});

//updating data
router.put("/:id", (req, res) => {
  Scores.findById(req.params.id, (err, score) => {
    if (!score) res.status(404).json({ Error: "Data not found." });
    else {
      score.player = req.body.player || score.player;
      score.score = req.body.score || score.score;
      score.updatedDate = Date.now();

      score
        .save()
        .then(() =>
          res.json({
            scores: score,
            msg: `Score updated successfully.`
          })
        )
        .catch(err => res.status(400).json({ Error: err }));
    }
  });
});

//deleting data
router.delete("/:id", async (req, res) => {
  const score = await Scores.findOne({ _id: req.params.id });
  if (!score) return res.status(404).send("Data not found.");

  await score
    .remove()
    .then(() => res.json({ msg: "Data deleted successfully." }));
});

module.exports = router;
