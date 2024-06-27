const Reservation = require("../model/reservationModel");
const {
  createReservation,
  sendAdminEmail,
  sendUserEmail,
} = require("../service/reservationService");

async function create(req, res, next) {
  try {
    const reservationData = req.body;
    const newReservation = await createReservation(reservationData);
    await sendAdminEmail(newReservation);
    await sendUserEmail(newReservation);

    res.status(201).json({
      message: "Reservation successful and emails sent.",
      reservation: newReservation,
    });
  } catch (error) {
    next(error);
  }
}

async function getAll(req, res, next) {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    next(error);
  }
}

module.exports = { create, getAll };
