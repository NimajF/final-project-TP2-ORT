import express from "express";
import {
  getLoans,
  getLoanById,
  createLoan,
  updateLoan,
  deleteLoan,
} from "../controllers/loanController.js";
import validateUserAndBook from "../middleware/validateUserAndBook.js"; 
import checkBookAvailability from "../middleware/checkBookAvailability.js"; 
import authenticate from "../middleware/authenticate.js"; 
import authorize from "../middleware/authorize.js"; 

const router = express.Router();

router.get("/", authenticate, authorize(["admin"]), getLoans);


router.get("/:id", authenticate, authorize(["admin"]), getLoanById);


router.post(
  "/",
  authenticate, 
  authorize(["user", "admin"]), 
  validateUserAndBook, 
  checkBookAvailability,
  createLoan 
);

router.put("/:id", authenticate, authorize(["user", "admin"]), updateLoan);

router.delete("/:id", authenticate, authorize(["admin"]), deleteLoan);

export default router;

