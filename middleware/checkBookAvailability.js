import Loan from "../models/loan.js";

const checkBookAvailability = async (req, res, next) => {
  const { bookId } = req.body;

  const activeLoan = await Loan.findOne({
    where: { bookId, returnDate: null },
  });

  if (activeLoan) {
    return res.status(400).json({ message: "Book is already loaned out" });
  }

  next();
};

export default checkBookAvailability;
