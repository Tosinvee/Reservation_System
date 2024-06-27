const express = require("express");
const router = express.Router();
const { create, getAll } = require("../controller/reservationController");
const validateReservation = require("../middleware/reserveValidate");

router.post("/reservations", validateReservation, create);
router.get("/reservations", getAll);

module.exports = router;
