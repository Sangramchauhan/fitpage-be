const express = require('express');
const router = express.Router();
const { dataController } = require("../controllers/dataController");

// api route to get data
router.get('/data', dataController);

// exported router
module.exports = router;