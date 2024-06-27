const Reservation = require("../model/reservationModel");
const EmailSender = require("../utils/email");

async function createReservation(reservationData) {
  const newReservation = new Reservation(reservationData);
  await newReservation.save();
  return newReservation;
}

async function sendAdminEmail(reservation) {
  const adminMessage = {
    email: process.env.EMAIL,
    subject: "New Reservation",
    html: `<h1>New Reservation</h1>
           <p>Name: ${reservation.name}</p>
           <p>Number of People: ${reservation.no_of_people}</p>
           <p>Date: ${reservation.date}</p>
           <p>Phone Number: ${reservation.phonenumber}</p>
           <p>Email: ${reservation.email}</p>`,
  };
  await EmailSender(adminMessage);
}

async function sendUserEmail(reservation) {
  const userMessage = {
    sender: "process.env.EMAIL",
    email: reservation.email,
    subject: "Reservation Confirmation",
    html: `<h1>Reservation Confirmation</h1>
           <p>Thank you, ${reservation.name}, for your reservation.</p>
           <p>Details:</p>
           <p>Number of People: ${reservation.no_of_people}</p>
           <p>Date: ${reservation.date}</p>
           <p>Phone Number: ${reservation.phonenumber}</p>
           <p>Email: ${reservation.email}</p>`,
  };
  await EmailSender(userMessage);
}

module.exports = { createReservation, sendAdminEmail, sendUserEmail };
