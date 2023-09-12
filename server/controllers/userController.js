import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

// Create a new user
// Create a new user
export const createUser = asyncHandler(async (req, res) => {
  console.log("Creating a user");
  let { email } = req.body;
  try {
    const userExists = await prisma.user.findUnique({ where: { email: email } });
    if (!userExists) {
      const user = await prisma.user.create({ data: req.body });
      res.status(201).json({
        message: "User registered successfully",
        user: user,
      });
    } else {
      // Handle the case where the user already exists.
      // You might want to update the existing user's information or return a different response.
      res.status(200).json({ message: "User already registered" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Book a visit to a residency
export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });

    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res.status(400).json({ message: "The one you selected is already booked by you" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.status(200).json({ message: "The visit has been booked successfully" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all bookings for a user
export const getAllbookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cancel a booking
export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedVisits: true },
    });
    const index = user.bookedVisits.findIndex((visit) => visit.id === id);
    if (index === -1) {
      res.status(404).json({ message: "Booking not found" });
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          bookedVisits: {
            set: user.bookedVisits,
          },
        },
      });
      res.status(200).json({ message: "Cancellation Successful" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add or remove from favorites
export const toFav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user.favResidenciesID.includes(rid)) {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesID: {
            set: user.favResidenciesID.filter((id) => id !== rid),
          },
        },
      });

      res.status(200).json({ message: "Favorites removed", user: updateUser });
    } else {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesID: {
            push: rid,
          },
        },
      });
      res.status(200).json({ message: "Favorites Updated", user: updateUser });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all favorites for a user
export const getAllFavorites = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const favResd = await prisma.user.findUnique({
      where: { email },
      select: { favResidenciesID: true },
    });
    res.status(200).json(favResd);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
