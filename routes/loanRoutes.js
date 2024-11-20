import express from "express";
import {
  getLoans,
  getLoanById,
  createLoan,
  updateLoan,
  deleteLoan,
} from "../controllers/loanController.js";
import validateUserAndBook from "../middleware/validateUserAndBook.js"; // Import middleware
import checkBookAvailability from "../middleware/checkBookAvailability.js"; // Import middleware

const router = express.Router();

router.get("/", getLoans);
router.get("/:id", getLoanById);
router.post("/", validateUserAndBook, checkBookAvailability, createLoan); // Add a new loan
router.put("/:id", updateLoan);
router.delete("/:id", deleteLoan);

export default router;
