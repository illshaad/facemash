const express = require("express");
const router = express.Router();

const catCtrl = require("../controller/cat-ctrl");

router.post("/init", catCtrl.initializeApp);
router.get("/random", catCtrl.randomeCat);
router.get("/cats", catCtrl.getCats);
router.post("/vote", catCtrl.addVote);

module.exports = router;
